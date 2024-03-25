import type { LoaderFunction } from "@remix-run/node";
import { client } from "~/pokko";
import {
  GetPostDocument,
  GetPostQuery,
  GetPostQueryVariables,
} from "~/pokko/queries";

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

  switch (res.data.entry.__typename) {
    case "PostMarkdown": {
      return new Response(
        `# ${res.data.entry.title}

Published: ${new Date(res.data.entry.date!).toLocaleDateString("en-AU", {
          dateStyle: "long",
        })}
Category: ${res.data.entry.category?.pokko.name}

${res.data.entry.body}`,
        {
          headers: {
            "x-content-type-options": "nosniff",
          },
        }
      );
    }
    default: {
      return new Response("Unsupported", { status: 415 });
    }
  }
};
