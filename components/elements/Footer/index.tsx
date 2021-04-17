import * as React from "react";

import style from "./Footer.module.scss";

export const Footer: React.FC = () => (
  <div className={style.footer}>
    Powered by{" "}
    <a href="https://www.pokko.io/" target="_blank" rel="noopener noreferrer">
      Pokko
    </a>
  </div>
);
