import Link from "next/link";
import { notFound } from "next/navigation";
import { PostList } from "~/components/PostList";
import { client } from "~/pokko";
import {
	ListPostsDocument,
	ListPostsQuery,
	ListPostsQueryVariables,
} from "~/pokko/queries";
import "~/styles/home.css";
import "~/styles/post-list.css";

export const metadata = {
	title: "Blog - Brendan McKenzie",
};

export const dynamic = 'force-dynamic'; // Skip pre-rendering, generate on-demand
export const revalidate = 300; // Cache for 5 minutes in CDN

type PageProps = {
	params: Promise<{ page: string }>;
};

async function getPostsPage(page: number) {
	const pageSize = 10;

	const res = await client.query<ListPostsQuery, ListPostsQueryVariables>({
		query: ListPostsDocument,
		variables: {
			skip: (page - 1) * pageSize,
			take: pageSize,
		},
	});

	if (!res.data || res.data.entries?.allPostBase?.nodes.length === 0) {
		return null;
	}

	return {
		posts:
			res.data.entries?.allPostBase?.nodes.map((ent) => ({
				id: ent!.id!,
				title: ent!.title!,
				summary: ent!.summary!,
				date: ent!.date!,
				alias: ent!.alias!,
				image: ent!.image?.url,
				category: ent!.category?.pokko.name,
			})) ?? [],
		pagination: {
			page,
			pageSize,
			currentPageCount: res.data.entries?.allPostBase?.nodes.length ?? 0,
			totalCount: res.data.entries?.allPostBase?.totalCount ?? 0,
			totalPageCount: Math.ceil(
				(res.data.entries?.allPostBase?.totalCount ?? 0) / pageSize
			),
			hasNext: res.data.entries?.allPostBase?.pageInfo.hasNextPage ?? false,
			hasPrev: res.data.entries?.allPostBase?.pageInfo.hasPrevPage ?? false,
		},
	};
}

export default async function PostsPage({ params }: PageProps) {
	const { page: pageParam } = await params;
	const page = parseInt(pageParam, 10);

	const data = await getPostsPage(page);

	if (!data) {
		notFound();
	}

	return (
		<main>
			<PostList posts={data.posts} />
			<ul className="pagination">
				{data.pagination.hasPrev ? (
					<li>
						<Link href={`/posts/pages/${data.pagination.page - 1}`}>
							&laquo; Previous
						</Link>
					</li>
				) : (
					<li>
						<Link href="/">Back</Link>
					</li>
				)}
				<li>
					Page {data.pagination.page} of {data.pagination.totalPageCount}
				</li>
				{data.pagination.hasNext ? (
					<li>
						<Link href={`/posts/pages/${data.pagination.page + 1}`}>
							Next &raquo;
						</Link>
					</li>
				) : null}
			</ul>
		</main>
	);
}
