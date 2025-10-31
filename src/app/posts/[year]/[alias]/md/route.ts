import { redirect, notFound } from "next/navigation";
import { client } from "~/pokko";
import {
	GetPostDocument,
	GetPostQuery,
	GetPostQueryVariables,
} from "~/pokko/queries";

type RouteParams = {
	params: Promise<{
		year: string;
		alias: string;
	}>;
};

export async function GET(request: Request, { params }: RouteParams) {
	const { year, alias } = await params;

	const res = await client.query<GetPostQuery, GetPostQueryVariables>({
		query: GetPostDocument,
		variables: {
			path: ["website", "home", "posts", year, alias],
			alias,
		},
	});

	if (!res.data.entry) {
		if ((res.data.entries?.allPostBase?.nodes.length ?? 0) > 0) {
			const path = res.data?.entries?.allPostBase?.nodes[0]?.pokko.path;
			if (path) {
				redirect(["", ...path.slice(2)].join("/") + ".md");
			}
		}
		notFound();
	}

	switch (res.data.entry.__typename) {
		case "PostMarkdown": {
			const markdown = `# ${res.data.entry.title}

Published: ${new Date(res.data.entry.date!).toLocaleDateString("en-AU", {
				dateStyle: "long",
			})}
Category: ${res.data.entry.category?.pokko.name}

${res.data.entry.body}`;

			return new Response(markdown, {
				headers: {
					"Content-Type": "text/markdown; charset=utf-8",
					"X-Content-Type-Options": "nosniff",
				},
			});
		}
		default: {
			return new Response("Unsupported", { status: 415 });
		}
	}
}
