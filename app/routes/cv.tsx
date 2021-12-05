import * as React from "react";
import { LinksFunction, MetaFunction } from "remix";
import { positions } from "../data/cv";

import style from "../styles/cv.css";

export const handle = { layout: false };

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
};

export const meta: MetaFunction = () => {
  return {
    title: "Curriculum Vitae of Brendan McKenzie",
    description:
      "Software and technology enthusiast, focussed on pushing the envelope with emerging technologies.",
  };
};

export const CurriculumVitaePage: React.FC = () => (
  <div className="cv__container">
    <div className="cv__section_container">
      <div>
        <h1 className="cv__intro_name">Brendan McKenzie</h1>
        <h2 className="cv__intro_title">Software Architect</h2>
      </div>
      <div className="cv__section_body">
        <ul className="cv__intro_body_list">
          <li className="cv__intro_body_name">
            <strong>Brendan McKenzie</strong>
          </li>
          <li className="cv__intro_body_location">Melbourne, Australia</li>
          <li className="cv__intro_body_phone">
            <a href="tel:+61477182492">0477 182 492</a>
          </li>
          <li className="cv__intro_body_email">
            <a href="mailto:hello@brendanmckenzie.com">
              hello@brendanmckenzie.com
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="cv__section_container">
      <div className="cv__section_overview">
        <h3 className="cv__section_heading">Summary</h3>
      </div>
      <div className="cv__section_body">
        <p>
          Established software architect with experience in a number of global
          markets. Exposure to software development targeting mobile, web,
          desktop and cloud environments. Strong passion for designing and
          implementing integrated systems utilising modern technology.
        </p>
      </div>
    </div>
    <div className="cv__section_container">
      <div className="cv__section_overview">
        <h3 className="cv__section_heading">Experience</h3>
        <p>
          Many years working in agencies delivering countless enterprise-level
          products for government, not-for-profit, new ventures and consumer
          brands.
        </p>
        <p>
          See{" "}
          <a
            href="https://www.linkedin.com/in/brendanmckenzie"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>{" "}
          for a full history of experience
        </p>
      </div>
      <div className="cv__section_body">
        {positions.map((ent, idx) => (
          <div key={idx} className="cv__position_container">
            <div className="cv__position_header">
              <strong className="cv__position_company">{ent.company}</strong>
              <span className="cv__position_position">{ent.position}</span>
            </div>
            <ul className="cv__position_meta">
              <li>{ent.dates.join(" – ")}</li>
              <li>{ent.location}</li>
            </ul>

            <p className="cv__position_summary">{ent.summary}</p>
            <p className="cv__position_tech">
              Technologies – {ent.technologies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CurriculumVitaePage;
