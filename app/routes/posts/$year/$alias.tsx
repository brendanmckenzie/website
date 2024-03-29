import { LoaderFunction, MetaFunction } from "@remix-run/server-runtime";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { HeadersFunction, LinksFunction } from "@remix-run/node";
import { SlateReactPresentation } from "~/components/RichText";
import { client } from "~/pokko";
import {
  GetPostQuery,
  GetPostQueryVariables,
  GetPostDocument,
} from "~/pokko/queries";
import style from "../../../styles/post.css";
import { Link, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  const res = await client.query<GetPostQuery, GetPostQueryVariables>({
    query: GetPostDocument,
    fetchPolicy: "network-only",
    variables: {
      path: [
        "website",
        "home",
        "posts",
        params.year as string,
        params.alias as string,
      ],
      alias: params.alias as string,
    },
  });

  if (!res.data.entry) {
    if (res.data.entries?.allPostBase?.nodes.length ?? 0 > 0) {
      const path = res.data?.entries?.allPostBase?.nodes[0]?.pokko.path!;

      throw new Response("Moved", {
        status: 301,
        headers: { Location: ["", ...path.slice(2)].join("/") },
      });
    }
    throw new Response("Not Found", { status: 404 });
  }

  return res.data.entry;
};

export const meta: MetaFunction = ({ data }) => {
  return [
    {
      title: `${data.title} - Brendan McKenzie`,
    },
    { name: "description", content: data.summary },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
};

export const headers: HeadersFunction = ({}) => {
  return {
    "Cache-Control": "s-maxage=300, stale-while-revalidate=60",
  };
};

export const handle = { header: false };

export default function Index() {
  const post = useLoaderData();

  return (
    <main className="post">
      <div className="post__header">
        <Link to="/">Brendan McKenzie</Link>
        <h2>{post.title}</h2>
        <p>
          {new Date(post.date).toLocaleDateString("en-AU", {
            dateStyle: "full",
          })}
        </p>
      </div>
      {post.image?.url && post.image?.url.split("/")[4] !== "" ? (
        <img src={post.image.url} alt="" className="post__image" />
      ) : null}
      {post.bodyRich?.map((val: any, idx: number) =>
        val ? (
          <article key={idx}>
            <SlateReactPresentation value={val.body} />
          </article>
        ) : null
      )}
      {post.body ? (
        <Markdown options={{ forceBlock: true, wrapper: "article", overrides }}>
          {post.body ?? ""}
        </Markdown>
      ) : null}
    </main>
  );
}

const overrides: MarkdownToJSX.Overrides = {
  a({ node, children, href, ...props }) {
    if (href.startsWith("http:") || href.startsWith("https:")) {
      return (
        <a href={href} {...props} rel="noreferrer noopener" target="_blank">
          {children}
        </a>
      );
    } else {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }
  },

  code({ node, inline, className, children, ...props }) {
    const match = /lang-(\w+)/.exec(className || "");

    return match ? (
      <SyntaxHighlighter
        language={match[1]}
        style={dracula}
        showLineNumbers
        customStyle={{ borderRadius: 0 }}
        {...props}
      >
        {children.trim()}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
