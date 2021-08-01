import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  ListPostsDocument,
  ListPostsQuery,
  ListPostsQueryVariables,
} from "../../../pokko/queries";
import { client, clientPreview } from "../../../lib/pokko";
import { useRouter } from "next/router";
import { PostListPage } from "../../../components/pages/PostListPage/PostListPage";

const pageSize = 10;

const PostListingPage: React.FC<ListPostsQuery & { page: number }> = ({
  entries,
  page,
}) => {
  const router = useRouter();

  return (
    <PostListPage
      loading={router.isFallback}
      posts={
        entries?.allPostBase.nodes.map((ent) => ({
          alias: ent.alias!,
          title: ent.title!,
          category: ent.category!,
          date: ent.date!,
          summary: ent.summary!,
          id: ent.id!,
          url: {
            pathname: "/posts/[year]/[alias]",
            query: { year: ent.date.substr(0, 4), alias: ent.alias },
          },
        })) ?? []
      }
      nextUrl={
        entries?.allPostBase.pageInfo.hasNextPage
          ? {
              pathname: "/posts/pages/[page]",
              query: { page: (page + 1).toString(10) },
            }
          : undefined
      }
    />
  );
};

export const getStaticProps: GetStaticProps<ListPostsQuery> = async ({
  preview,
  params,
}) => {
  const clientActual = preview ? clientPreview : client;

  const revalidate = 60;
  const page = parseInt(params.page as string, 10);
  const res = await clientActual.query<ListPostsQuery, ListPostsQueryVariables>(
    {
      query: ListPostsDocument,
      fetchPolicy: "network-only",
      variables: {
        skip: (page - 1) * pageSize,
        take: pageSize,
      },
    }
  );

  if (!res.data || res.data.entries.allPostBase.nodes.length === 0) {
    return { notFound: true, revalidate };
  }

  return {
    revalidate,
    props: { ...res.data, page },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from({
    length: 4,
  }).map((_, page) => ({ params: { page: (page + 1).toString(10) } }));

  return {
    paths,
    fallback: true,
  };
};

export default PostListingPage;
