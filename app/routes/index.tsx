import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type {
  LoaderFunction,
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";

import { client } from "~/pokko";
import {
  ListPostsDocument,
  ListPostsQuery,
  ListPostsQueryVariables,
} from "~/pokko/queries";

import style from "../styles/home.css";
import styleList from "../styles/post-list.css";
import { PostList, PostListProps } from "~/components/PostList";

type PageData = PostListProps & {};

export const loader: LoaderFunction = async () => {
  const res = await client.query<ListPostsQuery, ListPostsQueryVariables>({
    query: ListPostsDocument,
    variables: { skip: 0, take: 10 },
  });

  const data: PageData = {
    posts:
      res.data.entries?.allPostBase?.nodes.map((ent) => ({
        id: ent!.id!,
        title: ent!.title!,
        summary: ent!.summary!,
        date: ent!.date!,
        alias: ent!.alias!,
        image: ent!.image?.url,
        category: ent!.category?.pokko.name,
      })) ?? [],
  };

  return json(data);
};

export const meta: MetaFunction = () => {
  return [
    {
      title: "Brendan McKenzie",
    },
    {
      name: "description",
      content:
        "Software and technology enthusiast, focussed on pushing the envelope with emerging technologies.",
    },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: style },
    { rel: "stylesheet", href: styleList },
  ];
};

export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "s-maxage=300, stale-while-revalidate=60",
  };
};

export default function Index() {
  let data = useLoaderData<PageData>();

  return (
    <main>
      <ul className="socials">
        {/* <li>
          <a
            href="https://www.twitter.com/officialbmck"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter"
            className="social__twitter"
          >
            <Twitter />
          </a>
        </li> */}
        <li>
          <a
            href="https://github.com/brendanmckenzie"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Github"
            className="social__github"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/brendanjmckenzie/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="social__instagram"
          >
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/brendanmckenzie/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="social__linkedin"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="RSS Feed"
            className="social__rss"
          >
            <RssFeed />
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@brendanmckenzie.com"
            aria-label="Email"
            className="social__email"
          >
            <Email />
          </a>
        </li>
      </ul>

      <PostList posts={data.posts} />
      <ul className="pagination">
        <li>
          <Link to="/posts/pages/2">See more</Link>
        </li>
      </ul>
    </main>
  );
}

// const Twitter: React.FC = () => (
//   <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//     <path
//       fill="white"
//       d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
//     />
//   </svg>
// );

const Github: React.FC = () => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="white"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    />
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

const LinkedIn: React.FC = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="white"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </svg>
);

const Instagram: React.FC = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="white"
      d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
    />
  </svg>
);

const RssFeed: React.FC = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.354 7.325C12.838 2.82 6.829.338.434.338v4.694c5.139 0 9.966 1.994 13.593 5.613a19.031 19.031 0 0 1 5.625 13.562h4.705a23.69 23.69 0 0 0-7.003-16.882Z"
      fill="#fff"
    />
    <path
      d="M.386 8.282v4.695c6.206 0 11.256 5.038 11.256 11.23h4.704c0-8.78-7.16-15.925-15.96-15.925Z"
      fill="#fff"
    />
    <path
      d="M3.727 24.338a3.366 3.366 0 0 0 3.37-3.363 3.366 3.366 0 0 0-3.37-3.362 3.366 3.366 0 0 0-3.37 3.363 3.366 3.366 0 0 0 3.37 3.362Z"
      fill="#fff"
    />
  </svg>
);
