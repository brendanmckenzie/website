import * as React from "react";
import { GetStaticProps } from "next";
import {
  ListPostsDocument,
  ListPostsQuery,
  ListPostsQueryVariables,
} from "../pokko/queries";
import { client } from "../lib/pokko";
import { HomePage } from "../components/pages/HomePage";

const Home: React.FC<ListPostsQuery> = ({ entries }) => (
  <HomePage
    latestPosts={entries.allPost.nodes.map((ent) => ({
      alias: ent.alias!,
      title: ent.title!,
      category: ent.category!,
      date: ent.date!,
      summary: ent.summary!,
      id: ent.id!,
    }))}
  />
);

const revalidate = 5;

export const getStaticProps: GetStaticProps<ListPostsQuery> = async () => {
  const res = await client.query<ListPostsQuery, ListPostsQueryVariables>({
    query: ListPostsDocument,
    fetchPolicy: "network-only",
  });

  if (!res.data) {
    return { notFound: true, revalidate };
  }

  return {
    revalidate,
    props: res.data,
  };
};

export default Home;
