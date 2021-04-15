import React from "react";
import Head from "next/head";
import Image from "next/image";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { Section } from "../Bulma";
import { PokMedia } from "../../pokko/queries";

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
    image?: PokMedia;
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
            Posted:{" "}
            {new Date(post.date).toLocaleDateString("en-AU", {
              dateStyle: "full",
            })}
          </p>
        </div>
        {post.image ? (
          <Image src={post.image.url} height={600} width={1200} />
        ) : null}
        <Markdown
          className="article__body content"
          source={post.body}
          renderers={renderers}
        />
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

const renderers: { [nodeType: string]: React.ElementType } = {
  code({ node, className, ...props }) {
    if (props.language) {
      return (
        <SyntaxHighlighter
          language={props.language}
          PreTag="pre"
          style={dracula}
          showLineNumbers
        >
          {props.value}
        </SyntaxHighlighter>
      );
    }

    return <pre className={className}>{props.value}</pre>;
  },
};
