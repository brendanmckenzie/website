import { Link } from "@remix-run/react";
import Markdown from "markdown-to-jsx";

export type PostListProps = {
  posts: {
    id: string;
    title: string;
    summary: string;
    date: string;
    alias: string;
    image?: string;
    category?: string;
  }[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="post__list">
      {posts.map((ent) => (
        <li key={ent.id}>
          <Link
            to={`/posts/${ent.date.substring(0, 4)}/${ent.alias}`}
            className="post__list--item--banner"
          >
            {ent.image ? <img src={ent.image} alt="" /> : null}
            <p>{ent.title}</p>
          </Link>
          <div className="post__list--item--summary">
            <Markdown options={{ forceBlock: true }}>{ent.summary}</Markdown>
          </div>
          <div className="post__list--item--meta">
            <time>
              {new Date(ent.date).toLocaleDateString("en-AU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {ent.category ? <p>{ent.category}</p> : null}
          </div>
        </li>
      ))}
    </ul>
  );
};
