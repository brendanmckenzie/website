import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  GetPostDocument,
  GetPostQuery,
  GetPostQueryVariables,
} from "../../../pokko/queries";
import { client } from "../../../lib/pokko";
import { BlogPostPage } from "../../../components/pages/BlogPostPage";

const Post: React.FC<GetPostQuery> = ({ entry }) => {
  if (entry.__typename === "Post") {
    return (
      <BlogPostPage
        post={{
          alias: entry.alias!,
          title: entry.title!,
          category: entry.category!,
          date: entry.date!,
          summary: entry.summary!,
          id: entry.id!,
          body: entry.body!,
          tags: entry.tags!,
        }}
      />
    );
  }

  return null;
};

const revalidate = 5;

export const getStaticProps: GetStaticProps<GetPostQuery> = async ({
  params,
}) => {
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
    },
  });

  if (!res.data.entry) {
    return { notFound: true, revalidate };
  }

  return {
    revalidate,
    props: res.data,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Post;
