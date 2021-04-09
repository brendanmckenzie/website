import * as React from "react";
import Head from "next/head";
import { Section, Container, Columns, Column, Buttons } from "../Bulma";

export type HomePageProps = {
  latestPosts: {
    alias: string;
    category: string;
    date: string;
    id: string;
    summary: string;
    title: string;
  }[];
};

export const HomePage: React.FC<HomePageProps> = ({ latestPosts }) => (
  <>
    <Head>
      <title>Brendan McKenzie</title>
    </Head>
    <Section>
      <Container>
        <Columns>
          <Column span={4}>
            <figure className="image is-128x128">
              <img className="is-rounded" src="/assets/images/photo.jpg" />
            </figure>
            <h1 className="title is-1">Brendan McKenzie</h1>

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
            <ul className="post-listing__container">
              {latestPosts.map((ent) => (
                <li key={ent.id} className="post-listing__item">
                  <div className="post-listing__item--date">
                    {new Date(ent.date).toLocaleDateString("en-AU")}
                  </div>
                  <div className="post-listing__item--detail">
                    <a href={`/posts/${ent.date.substr(0, 4)}/${ent.alias}`}>
                      {ent.title}
                    </a>
                    <div className="content">{ent.summary}</div>
                  </div>
                  <div className="post-listing__item--category">
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
