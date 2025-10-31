import { client } from "@/pokko";
import {
	ListPostsQuery,
	ListPostsQueryVariables,
	ListPostsDocument,
} from "@/pokko/queries";

export async function GET() {
	const res = await client.query<ListPostsQuery, ListPostsQueryVariables>({
		query: ListPostsDocument,
		variables: {
			skip: 0,
			take: 512,
		},
	});

	const items =
		res.data?.entries?.allPostBase?.nodes
			.map((post) => {
				const url = `https://www.bmck.au/posts/${post?.date?.substring(
					0,
					4
				)}/${post?.alias}`;
				const postDate = new Date(post?.date ?? "").toISOString();

				return `  <url>
    <loc>${url}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
			})
			.join("\n") || "";

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.bmck.au/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${items}
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"X-Content-Type-Options": "nosniff",
			"Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
		},
	});
}

export const dynamic = 'force-dynamic'; // Skip pre-rendering, generate on-demand
export const revalidate = 3600; // Cache for 1 hour in CDN
