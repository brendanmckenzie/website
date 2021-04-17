import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import { PostList, PostSummary } from "../../elements/PostList";
import { Footer } from "../../elements/Footer";

import style from "./HomePage.module.scss";

export type HomePageProps = {
  latestPosts: PostSummary[];
};

export const HomePage: React.FC<HomePageProps> = ({ latestPosts }) => (
  <>
    <Head>
      <title>Brendan McKenzie</title>
    </Head>
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <h1>Brendan McKenzie</h1>

          <p>
            Software and technology enthusiast, focussed on pushing the envelope
            with emerging technologies.
          </p>
        </div>
      </div>
      <hr />
      <div className={style.socials}>
        <a
          href="https://www.twitter.com/officialbmck"
          className={style.twitter}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter />
        </a>
        <a
          href="https://github.com/brendanmckenzie"
          className={style.github}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github />
        </a>
        <a href="mailto:hello@brendanmckenzie.com" className={style.email}>
          <Email />
        </a>
      </div>
      <hr />

      <h2 className={style.heading}>Latest posts</h2>
      <PostList posts={latestPosts} />

      <div className={style.footer}>
        <Link href="/posts/pages/1">
          <a>More</a>
        </Link>
      </div>

      <Footer />
    </div>
  </>
);

const Twitter: React.FC = () => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const Github: React.FC = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Email: React.FC = () => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
    ></path>
  </svg>
);
