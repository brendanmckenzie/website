import Markdown from "markdown-to-jsx";
import { Link } from "remix";

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
          <img src={ent.image} alt="" />
          <Link to={`/posts/${ent.date.substr(0, 4)}/${ent.alias}`}>
            {ent.title}
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
