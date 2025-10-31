import { client } from "~/pokko";
import {
	ListPostsQuery,
	ListPostsQueryVariables,
	ListPostsDocument,
} from "~/pokko/queries";

function escapeXml(unsafe: string): string {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

export async function GET() {
	const res = await client.query<ListPostsQuery, ListPostsQueryVariables>({
		query: ListPostsDocument,
		variables: {
			skip: 0,
			take: 512,
		},
	});

	const pubDate = new Date().toUTCString();
	const currentYear = new Date().getFullYear();

	const items =
		res.data.entries?.allPostBase?.nodes
			.map((post) => {
				const url = `https://www.bmck.au/posts/${post?.date?.substring(
					0,
					4
				)}/${post?.alias}`;
				const postDate = new Date(post?.date ?? "").toUTCString();

				return `    <item>
      <title>${escapeXml(post?.title ?? "")}</title>
      <description>${escapeXml(post?.summary ?? "")}</description>
      <link>${escapeXml(url)}</link>
      <guid>${escapeXml(url)}</guid>
      <pubDate>${postDate}</pubDate>
    </item>`;
			})
			.join("\n") || "";

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet href="/rss.xsl" type="text/xsl"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Thoughts of Brendan McKenzie</title>
    <description>Posts by Brendan McKenzie, a software developer and traveller from Melbourne, Australia.</description>
    <link>https://www.bmck.au</link>
    <atom:link href="https://www.bmck.au/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <pubDate>${pubDate}</pubDate>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <generator>Monkeys</generator>
    <copyright>All rights reserved ${currentYear}, Brendan McKenzie</copyright>
    <managingEditor>hello@brendanmckenzie.com (Brendan McKenzie)</managingEditor>
${items}
  </channel>
</rss>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"X-Content-Type-Options": "nosniff",
			"Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
		},
	});
}

export const revalidate = 3600; // Revalidate every hour
