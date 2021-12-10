import { HeadersFunction, LoaderFunction } from "remix";
import { SitemapStream, streamToPromise } from "sitemap";
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

  const smStream = new SitemapStream({
    hostname: "https://www.brendanmckenzie.com/",
  });

  smStream.write({ url: "/", changefreq: "weekly", priority: 0.8 });

  res.data.entries?.allPostBase?.nodes.forEach((post) => {
    smStream.write({
      url: ["", "posts", post?.date?.substr(0, 4), post?.alias].join("/"),
      changefreq: "weekly",
      priority: 1,
    });
  });

  smStream.end();
  const sm = await streamToPromise(smStream);

  return new Response(sm.toString("utf-8"), {
    headers: { "Content-type": "application/xml" },
  });
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
  };
};
