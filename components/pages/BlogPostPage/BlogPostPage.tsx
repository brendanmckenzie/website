import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { PokMedia } from "../../../pokko/queries";
import { Footer } from "../../elements/Footer";

import * as style from "./BlogPostPage.css";

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

    <div className={style.container}>
      <div className={style.actions}>
        <Link href="/">
          <a className={style.actionLink}>Brendan McKenzie</a>
        </Link>
      </div>
      <div>
        <h1 className={style.title}>{post.title}</h1>
        <p className={style.meta}>
          {new Date(post.date).toLocaleDateString("en-AU", {
            dateStyle: "full",
          })}
        </p>
      </div>
      {post.image?.url && post.image?.url.split("/")[4] !== "" ? (
        <Image src={post.image.url} height={600} width={1200} alt="" />
      ) : null}
      <Markdown className={style.content} components={components}>
        {post.body ?? ""}
      </Markdown>
      <Footer />
    </div>
  </>
);

const components: { [nodeType: string]: React.ElementType } = {
  a({ node, children, href, ...props }) {
    if (href.startsWith("http:") || href.startsWith("https:")) {
      return (
        <a href={href} {...props} rel="noreferrer noopener" target="_blank">
          {children}
        </a>
      );
    } else {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }
  },

  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        style={dracula}
        showLineNumbers
        {...props}
      >
        {children.map((str) => str?.trimEnd("\n"))}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
