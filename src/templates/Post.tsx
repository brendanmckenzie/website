import React from "react";
import { graphql, PageProps } from "gatsby";

import "../../style/style.scss";
import { BlogPostPage } from "../../components/pages/BlogPostPage";

type BlogPost = PageProps<{
  post: {
    id: string;
    title: string;
    body: string;
    alias: string;
    date: string;
    tags: string;
    category: string;
    summary: string;
  };
}>;

const BlogPost: React.FC<BlogPost> = ({ data: { post } }) => (
  <BlogPostPage post={post} />
);

export default BlogPost;

export const query = graphql`
  query($entryId: String!) {
    post: pokPost(id: { eq: $entryId }) {
      id
      title
      body
      alias
      date
      tags
      category
      summary
    }
  }
`;
