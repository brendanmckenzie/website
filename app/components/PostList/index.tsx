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
  }[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="post__list">
      {posts.map((ent) => (
        <li key={ent.id}>
          <Link to={`/posts/${ent.date.substring(0, 4)}/${ent.alias}`}>
            <img src={ent.image} alt="" />
            <p>{ent.title}</p>
          </Link>
          <Markdown options={{ forceBlock: true }}>{ent.summary}</Markdown>
          <time>
            {new Date(ent.date).toLocaleDateString("en-AU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </li>
      ))}
    </ul>
  );
};
