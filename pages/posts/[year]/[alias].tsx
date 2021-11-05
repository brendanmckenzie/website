import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  GetPostDocument,
  GetPostQuery,
  GetPostQueryVariables,
  ListPostsDocument,
  ListPostsQuery,
  ListPostsQueryVariables,
  PokMedia,
} from "../../../pokko/queries";
import { client, clientPreview } from "../../../lib/pokko";
import { BlogPostPage } from "../../../components/pages/BlogPostPage/BlogPostPage";

const Post: React.FC<GetPostQuery> = ({ entry }) => {
  switch (entry.__typename) {
    case "PostMarkdown":
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
            image: entry.image as PokMedia,
          }}
        />
      );
    case "PostRichtext":
      return (
        <BlogPostPage
          post={{
            alias: entry.alias!,
            title: entry.title!,
            category: entry.category!,
            date: entry.date!,
            summary: entry.summary!,
            id: entry.id!,
            bodyRich: entry.bodyRich!,
            tags: entry.tags!,
            image: entry.image as PokMedia,
          }}
        />
      );
  }

  return null;
};

const revalidate = 5;

export const getStaticProps: GetStaticProps<GetPostQuery> = async ({
  preview,
  params,
}) => {
  const clientActual = preview ? clientPreview : client;
  const res = await clientActual.query<GetPostQuery, GetPostQueryVariables>({
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
    if (res.data.entries.allPostBase.nodes.length > 0) {
      const path = res.data.entries.allPostBase.nodes[0].pokko.path!;

      return {
        redirect: {
          destination: ["", ...path.slice(2)].join("/"),
          permanent: false,
        },
      };
    }
    return { notFound: true, revalidate };
  }

  return {
    revalidate,
    props: res.data,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.query<ListPostsQuery, ListPostsQueryVariables>({
    query: ListPostsDocument,
    fetchPolicy: "network-only",
    variables: {
      skip: 0,
      take: 5,
    },
  });

  if (!res.data) {
  }

  return {
    paths: res.data.entries.allPostBase.nodes.map((ent) => ({
      params: { year: ent.date.substr(0, 4), alias: ent.alias },
    })),
    fallback: "blocking",
  };
};

export default Post;
