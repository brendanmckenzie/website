import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { SlateReactPresentation } from "~/components/RichText";
import { client } from "~/pokko";
import {
	GetPostQuery,
	GetPostQueryVariables,
	GetPostDocument,
} from "~/pokko/queries";
import "~/styles/post.css";

export const dynamic = 'force-dynamic'; // Skip pre-rendering, generate on-demand
export const revalidate = 300; // Cache for 5 minutes in CDN

type PageProps = {
	params: Promise<{ year: string; alias: string }>;
};

async function getPost(year: string, alias: string) {
	const res = await client.query<GetPostQuery, GetPostQueryVariables>({
		query: GetPostDocument,
		variables: {
			path: ["website", "home", "posts", year, alias],
			alias,
		},
	});

	return res.data ?? null;
}

export async function generateMetadata({ params }: PageProps) {
	const { year, alias } = await params;
	const data = await getPost(year, alias);

	if (!data || !data.entry) {
		return {};
	}

	return {
		title: `${data.entry.title} - Brendan McKenzie`,
		description: data.entry.summary,
	};
}

export default async function Post({ params }: PageProps) {
	const { year, alias } = await params;
	const data = await getPost(year, alias);

	if (!data || !data.entry) {
		// Check if post was moved
		if ((data.entries?.allPostBase?.nodes.length ?? 0) > 0) {
			const path = data.entries?.allPostBase?.nodes[0]?.pokko.path;
			if (path) {
				redirect(["", ...path.slice(2)].join("/"));
			}
		}
		notFound();
	}

	const post = data.entry;

	return (
		<main className="post">
			<div className="post__header">
				<Link href="/">Brendan McKenzie</Link>
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
			{post.bodyRich?.map((val: { body?: unknown } | null, idx: number) =>
				val ? (
					<article key={idx}>
						<SlateReactPresentation value={val.body} />
					</article>
				) : null
			)}
			{post.body ? (
				<Markdown
					options={{ forceBlock: true, wrapper: "article", overrides }}
				>
					{post.body ?? ""}
				</Markdown>
			) : null}
		</main>
	);
}

const overrides: MarkdownToJSX.Overrides = {
	a({ children, href, ...props }) {
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

	code({ className, children, ...props }) {
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
