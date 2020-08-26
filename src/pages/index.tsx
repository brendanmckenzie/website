import * as React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import {
  Section,
  Container,
  Columns,
  Column,
  Buttons,
} from "../components/Bulma";
import "../style/style.scss";

type Props = {
  data: { latestPosts: any };
};

const HomePage: React.FC<Props> = ({ data: { latestPosts } }) => {
  return (
    <>
      <Helmet>
        <title>{`Brendan McKenzie`}</title>
      </Helmet>
      <Section>
        <Container>
          <Columns>
            <Column span={4}>
              <Columns>
                <Column>
                  <h1 className="title is-1">Brendan McKenzie</h1>
                </Column>
                <Column narrow>
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src="/assets/images/photo.jpg"
                    />
                  </figure>
                </Column>
              </Columns>

              <p>
                Software and technology enthusiast, focussed on pressing the
                envelope with emerging technologies.
              </p>
              <hr />
              <Buttons>
                <a
                  href="https://www.twitter.com/officialbmck"
                  className="button is-link is-rounded"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon">
                    <i className="fa fa-twitter" />
                  </span>
                  <span>Twitter</span>
                </a>
                <a
                  href="https://github.com/brendanmckenzie"
                  className="button is-dark is-rounded"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon">
                    <i className="fa fa-github" />
                  </span>
                  <span>Github</span>
                </a>
                <a
                  href="mailto:hello@brendanmckenzie.com"
                  className="button is-rounded"
                >
                  <span className="icon">
                    <i className="fa fa-envelope" />
                  </span>
                  <span>Email</span>
                </a>
              </Buttons>

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
            </Column>
            <Column>
              <h2 className="title is-2">Latest posts</h2>
              <ul>
                {latestPosts.nodes.map((ent) => (
                  <li key={ent.id} className="media">
                    <div className="media-left">
                      {new Date(ent.date).toLocaleDateString()}{" "}
                    </div>
                    <div className="media-content">
                      <Link to={`/posts/${ent.date.substr(0, 4)}/${ent.alias}`}>
                        <strong>{ent.title}</strong>
                      </Link>
                      <div className="content">{ent.summary}</div>
                    </div>
                    <div className="media-right">
                      <small>{ent.category}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </Column>
          </Columns>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query {
    latestPosts: allPokPost(sort: { fields: date, order: DESC }, limit: 15) {
      nodes {
        id
        title
        date
        alias
        category
        summary
      }
    }
  }
`;
