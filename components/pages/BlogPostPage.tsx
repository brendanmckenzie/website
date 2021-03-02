import React from "react";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";

import { Section } from "../Bulma";

type BlogPost = {
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
};

export const BlogPostPage: React.FC<BlogPost> = ({ post }) => (
  <>
    <Helmet>
      <title>{`${post.title} - Brendan McKenzie`}</title>
      <meta name="description" content={post.summary} />
    </Helmet>

    <Section>
      <div className="article__container">
        <h1 className="article__actions">
          <a href="/">brendanmckenzie.com</a>
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
