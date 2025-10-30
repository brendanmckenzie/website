import type { HeadersFunction, LoaderFunction } from "@remix-run/cloudflare";
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

export const loader: LoaderFunction = async () => {
  const res = await client.query<ListPostsQuery, ListPostsQueryVariables>({
    query: ListPostsDocument,
    fetchPolicy: "network-only",
    variables: {
      skip: 0,
      take: 512,
    },
  });

  const urls = [
    `  <url>
    <loc>https://www.bmck.au/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  ];

  res.data.entries?.allPostBase?.nodes.forEach((post) => {
    const url = `/posts/${post?.date?.substring(0, 4)}/${post?.alias}`;
    const lastmod = new Date(post?.pokko.modified).toISOString().split('T')[0];

    urls.push(`  <url>
    <loc>${escapeXml(`https://www.bmck.au${url}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-type": "application/xml; charset=utf-8" },
  });
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
  };
};
