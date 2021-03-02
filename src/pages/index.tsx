import * as React from "react";
import { graphql } from "gatsby";
import { HomePage } from "../../components/pages/HomePage";

import "../../style/style.scss";

type Props = {
  data: { latestPosts: any };
};

const Index: React.FC<Props> = ({ data: { latestPosts } }) => (
  <HomePage latestPosts={latestPosts.nodes} />
);

export default Index;

export const query = graphql`
  query {
    latestPosts: allPokPost(sort: { fields: date, order: DESC }, limit: 15) {
      nodes {
        id
        title
        date
        alias
        category
        summary
      }
    }
  }
`;
