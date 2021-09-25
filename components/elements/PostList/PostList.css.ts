import { style } from "@vanilla-extract/css";
import { media } from "../../pages/shared.css";

export { container } from "../../pages/shared.css";

export const list = style({
  display: "grid",
  rowGap: "1.5rem",
});

export const item = {
  container: style({
    display: "grid",
    rowGap: "0.5rem",
  }),
  detail: style({
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    columnGap: "1rem",
    rowGap: "0",
    alignItems: "center",
    "@media": {
      [media.mobile]: {
        gridTemplateColumns: "unset",
      },
    },
  }),
  date: style({
    fontSize: "0.75rem",
  }),
  link: style({
    lineHeight: "1.2",
  }),
  category: style({
    fontSize: "0.75rem",
  }),
  summary: style({
    color: "#666",
    lineHeight: 1.4,
  }),
};
