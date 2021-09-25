import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import * as style from "./PostListPage.css";
import { PostList, PostSummary } from "../../elements/PostList";
import { Footer } from "../../elements/Footer";

export type PostListPageProps = {
  posts: PostSummary[];
  loading: boolean;
  nextUrl?: object;
};

export const PostListPage: React.FC<PostListPageProps> = ({
  loading,
  nextUrl,
  posts,
}) => (
  <>
    <Head>
      <title>Posts - Brendan McKenzie</title>
    </Head>
    <div className={style.container}>
      <h1 className={style.heading}>
        <Link href="/">
          <a className={style.headingLink}>Brendan McKenzie</a>
        </Link>
      </h1>
      {loading ? (
        <p>Please wait...</p>
      ) : (
        <>
          <PostList posts={posts} />

          {nextUrl ? (
            <div className={style.footer}>
              <Link href={nextUrl}>
                <a className={style.footerItem}>More</a>
              </Link>
            </div>
          ) : null}
        </>
      )}
      <Footer />
    </div>
  </>
);
