import Link from "next/link";
import * as React from "react";

import { shortDate } from "../../../lib/util";

import style from "./PostList.module.scss";

export type PostSummary = {
  alias: string;
  category: string;
  date: string;
  id: string;
  summary: string;
  title: string;
  url: object;
};

export type PostListProps = { posts: PostSummary[] };

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <ul className={style.list}>
    {posts.map((ent) => (
      <li key={ent.id} className={style.item}>
        <div className={style["item-detail"]}>
          <span>{shortDate(ent.date)}</span>
          <Link href={ent.url}>
            <a>{ent.title}</a>
          </Link>
          <span>{ent.category}</span>
        </div>
        <p className={style["item-summary"]}>{ent.summary}</p>
      </li>
    ))}
  </ul>
);
