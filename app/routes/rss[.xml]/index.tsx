import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import RSS from "rss";
import { client } from "~/pokko";
import {
  ListPostsQuery,
  ListPostsQueryVariables,
  ListPostsDocument,
} from "~/pokko/queries";

export const loader: LoaderFunction = async () => {
  const res = await client.query<ListPostsQuery, ListPostsQueryVariables>({
    query: ListPostsDocument,
    fetchPolicy: "network-only",
    variables: {
      skip: 0,
      take: 512,
    },
  });

  const feed = new RSS({
    title: "Thoughts of Brendan McKenzie",
    description:
      "Posts by Brendan McKenzie, a software developer and traveller from Melbourne, Australia.",
    site_url: "https://www.bmck.au",
    feed_url: `https://www.bmck.au/rss.xml`,
    pubDate: new Date(),
    generator: "Monkeys",
    copyright: `All rights reserved ${new Date().getFullYear()}, Brendan McKenzie`,
  });

  res.data.entries?.allPostBase?.nodes.forEach((post) => {
    feed.item({
      title: post?.title!,
      description: post?.summary!,
      date: post?.date!,
      url:
        "https://www.bmck.au" +
        ["", "posts", post?.date?.substring(0, 4), post?.alias].join("/"),
    });
  });

  const xml = feed.xml({ indent: true });

  return new Response(xml, {
    headers: { "Content-type": "application/xml" },
  });
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
  };
};
