import { globalStyle, style } from "@vanilla-extract/css";

import { container as containerBase, media } from "../shared.css";

export const container = style([
  containerBase,
  {
    display: "grid",
    rowGap: "2rem",
    "@media": {
      [media.mobile]: {
        rowGap: "1rem",
      },
    },
  },
]);

export const actions = style({
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "1rem",
});

export const actionLink = style({
  color: "#666",
  textDecoration: "none",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  lineHeight: "1.2",
  color: "#222",
});

export const meta = style({
  color: "#666",
});

export const content = style({
  lineHeight: 1.8,
  overflow: "auto",
});

globalStyle(`${content} p:not(:last-child)`, {
  marginBottom: "1rem",
});

globalStyle(`${content} li + li`, {
  marginTop: "0.25em",
});

["p", "dl", "ol", "ul", "blockquote", "pre", "table"].forEach((str) =>
  globalStyle(`${content} ${str}:not(:last-child)`, {
    marginBottom: "1em",
  })
);

globalStyle(`${content} ol`, {
  listStylePosition: "outside",
  marginTop: "1em",
  padding: "1em 2em",
});

globalStyle(`${content} ul`, {
  listStyle: "disc outside",
  marginTop: "1em",
  padding: "1em 2em",
});

globalStyle(`${content} pre`, {
  overflowX: "auto",
  whiteSpace: "pre",
  wordWrap: "normal",
});

globalStyle(`${content} a`, {
  backgroundColor: "#084887",
  color: "white",
  padding: "2px 4px",
});
