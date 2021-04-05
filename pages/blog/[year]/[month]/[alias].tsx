import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

const OldRedirect1: React.FC = () => null;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {},
    redirect: {
      destination: `/posts/${params.year}/${params.alias}`,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default OldRedirect1;
