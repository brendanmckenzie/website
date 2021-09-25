import { style } from "@vanilla-extract/css";

import "./global.css";

export const media = {
  mobile: "screen and (max-width: 768px)",
};

export const container = style({
  maxWidth: "72ch",
  margin: "2rem auto",
  rowGap: "2rem",
  "@media": {
    [media.mobile]: {
      margin: "1rem",
      rowGap: "1rem",
    },
  },
});

export const footer = style({
  marginTop: "1rem",
  padding: "1rem 0",
  textAlign: "center",
});

export const footerItem = style({
  padding: "0.75rem 1.75rem",
  backgroundColor: "#084887",
  color: "white",
  fontWeight: "bold",
  textTransform: "uppercase",
  borderRadius: "0.5rem",

  ":hover": {
    opacity: "0.9",
  },
});
