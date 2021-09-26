import * as React from "react";
import * as style from "./CurriculumVitaePage.css";
import { positions } from "./data";

export const CurriculumVitaePage: React.FC = () => (
  <div className={style.container}>
    <div className={style.section.container}>
      <div>
        <h1 className={style.intro.name}>Brendan McKenzie</h1>
        <h2 className={style.intro.title}>Software Architect</h2>
      </div>
      <div className={style.section.body}>
        <ul className={style.intro.body.list}>
          <li className={style.intro.body.name}>
            <strong>Brendan McKenzie</strong>
          </li>
          <li className={style.intro.body.location}>Melbourne, Australia</li>
          <li className={style.intro.body.phone}>
            <a href="tel:+61477182492">0477 182 492</a>
          </li>
          <li className={style.intro.body.email}>
            <a href="mailto:hello@brendanmckenzie.com">
              hello@brendanmckenzie.com
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className={style.section.container}>
      <div className={style.section.overview}>
        <h3 className={style.section.heading}>Summary</h3>
      </div>
      <div className={style.section.body}>
        <p>
          Established software architect with experience in a number of global
          markets. Exposure to software development targeting mobile, web,
          desktop and cloud environments. Strong passion for designing and
          implementing integrated systems utilising modern technology.
        </p>
      </div>
    </div>
    <div className={style.section.container}>
      <div className={style.section.overview}>
        <h3 className={style.section.heading}>Experience</h3>
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
      <div className={style.section.body}>
        {positions.map((ent, idx) => (
          <div key={idx} className={style.position.container}>
            <div className={style.position.header}>
              <strong className={style.position.company}>{ent.company}</strong>
              <span className={style.position.position}>{ent.position}</span>
            </div>
            <ul className={style.position.meta}>
              <li>{ent.dates.join(" – ")}</li>
              <li>{ent.location}</li>
            </ul>

            <p className={style.position.summary}>{ent.summary}</p>
            <p className={style.position.tech}>
              Technologies – {ent.technologies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
