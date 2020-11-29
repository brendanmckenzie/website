import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";

import "../style/style.scss";
import { Section } from "../components/Bulma";

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
  <>
    <Helmet>
      <title>{`${post.title} - Brendan McKenzie`}</title>
      <meta name="description" content={post.summary} />
    </Helmet>

    <Section>
      <div className="article__container">
        <h1 className="article__actions">
          <Link to="/">brendanmckenzie.com</Link>
        </h1>
        <div className="article__header">
          <h1 className="article__title">{post.title}</h1>
          <p>Posted {new Date(post.date).toLocaleDateString("en-AU")}</p>
        </div>
        <hr />
        <Markdown className="article__body content" source={post.body} />
      </div>
    </Section>
    <Section>
      <div className="has-text-centered">
        <small>
          Powered by{" "}
          <a
            href="https://www.pokko.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pokko
          </a>
        </small>
      </div>
    </Section>
  </>
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
