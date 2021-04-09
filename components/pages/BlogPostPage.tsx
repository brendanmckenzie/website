import React from "react";
import Head from "next/head";
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
    <Head>
      <title>{post.title} - Brendan McKenzie</title>
      <meta name="description" content={post.summary} />
    </Head>

    <Section>
      <div className="article__container">
        <div className="article__actions">
          <a href="/">brendanmckenzie.com</a>
        </div>
        <div className="article__header">
          <h1 className="article__title">{post.title}</h1>
          <p className="article__meta">
            Posted {new Date(post.date).toLocaleDateString("en-AU")}
          </p>
        </div>
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
