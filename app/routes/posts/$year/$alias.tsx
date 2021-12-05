import { LoaderFunction, MetaFunction } from "@remix-run/server-runtime";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { LinksFunction, useLoaderData } from "remix";
import { SlateReactPresentation } from "~/components/RichText";
import { client } from "~/pokko";
import {
  GetPostQuery,
  GetPostQueryVariables,
  GetPostDocument,
} from "~/pokko/queries";
import style from "../../../styles/post.css";

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
  return {
    title: `${data.title} - Brendan McKenzie`,
    description: data.summary,
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
};

export default function Index() {
  const post = useLoaderData();

  return (
    <main className="post">
      <div className="post__header">
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
      {post.bodyRich?.map((val: any) =>
        val ? (
          <article>
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
