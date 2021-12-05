import { Link } from "react-router-dom";
import {
  json,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix";
import { PostList, PostListProps } from "~/components/PostList";
import { client } from "~/pokko";
import {
  ListPostsDocument,
  ListPostsQuery,
  ListPostsQueryVariables,
} from "~/pokko/queries";

import style from "../../../styles/home.css";
import styleList from "../../../styles/post-list.css";

type PaginationProps = {
  hasNext: boolean;
  hasPrev: boolean;
  totalCount: number;
  page: number;
  pageSize: number;
  totalPageCount: number;
  currentPageCount: number;
};
type PageData = PostListProps & {
  pagination: PaginationProps;
};

export const loader: LoaderFunction = async ({ params }) => {
  const page = parseInt(params.page as string, 10);
  const pageSize = 10;

  const res = await client.query<ListPostsQuery, ListPostsQueryVariables>({
    query: ListPostsDocument,
    fetchPolicy: "network-only",
    variables: {
      skip: (page - 1) * pageSize,
      take: pageSize,
      // filter: {}, // TODO: support searching
    },
  });

  if (!res.data || res.data.entries?.allPostBase?.nodes.length === 0) {
    throw new Response("Not Found", { status: 404 });
  }

  const data: PageData = {
    posts:
      res.data.entries?.allPostBase?.nodes.map((ent) => ({
        id: ent!.id!,
        title: ent!.title!,
        summary: ent!.summary!,
        date: ent!.date!,
        alias: ent!.alias!,
        image: ent!.image?.url,
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

  return json(data);
};

export const meta: MetaFunction = () => {
  return {
    title: `Blog - Brendan McKenzie`,
  };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: style },
    { rel: "stylesheet", href: styleList },
  ];
};

export default function Index() {
  let data = useLoaderData<PageData>();

  return (
    <main>
      <PostList posts={data.posts} />
      <ul className="pagination">
        {data.pagination.hasPrev ? (
          <li>
            <Link to={`/posts/pages/${data.pagination.page - 1}`}>
              &laquo; Previous
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/">Back</Link>
          </li>
        )}
        <li>
          Page {data.pagination.page} of {data.pagination.totalPageCount}
        </li>
        {data.pagination.hasNext ? (
          <li>
            <Link to={`/posts/pages/${data.pagination.page + 1}`}>
              Next &raquo;
            </Link>
          </li>
        ) : null}
      </ul>
    </main>
  );
}
