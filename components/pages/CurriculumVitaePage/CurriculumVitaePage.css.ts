import { createTheme, style } from "@vanilla-extract/css";

import { container as containerBase } from "../shared.css";

export const [themeClass, vars] = createTheme({
  colour: {
    accent: "rgb(242, 81, 27)",
    muted: "#999",
  },
  size: {
    base: "16px",
    title: "2.25rem",
    subtitle: "1.25rem",
    heading: "1.25rem",
    content: "1rem",
    small: "0.75rem",
  },
});

export const container = style([
  themeClass,
  containerBase,
  {
    display: "grid",
    fontSize: vars.size.base,
    lineHeight: "1.4",
    rowGap: "1rem",
  },
]);

export const section = {
  container: style({
    display: "grid",
    gridTemplateColumns: `22ch auto`,
    columnGap: "1rem",
  }),
  body: style({
    borderTop: `3px solid ${vars.colour.muted}`,
    paddingTop: "0.75rem",
    display: "grid",
    rowGap: "1rem",
  }),
  overview: style({
    borderTop: `3px solid ${vars.colour.muted}`,
    paddingTop: "0.75rem",
    display: "grid",
    rowGap: "0.75rem",
    fontSize: vars.size.content,
    alignContent: "flex-start",
  }),
  heading: style({
    fontWeight: "bold",
    fontSize: vars.size.heading,
  }),
};

export const intro = {
  name: style({
    fontSize: vars.size.title,
    fontWeight: "bold",
    lineHeight: "1",
  }),
  title: style({
    fontSize: vars.size.subtitle,
    fontWeight: "bold",
    color: vars.colour.accent,
  }),
  body: {
    list: style({ listStyleType: "none" }),
    name: style({
      fontWeight: "bold",
      fontSize: vars.size.heading,
    }),
    location: style({
      fontSize: vars.size.content,
      marginBottom: "0.5rem",
    }),
    phone: style({
      fontSize: vars.size.content,
      color: vars.colour.accent,
    }),
    email: style({
      fontSize: vars.size.content,
      color: vars.colour.accent,
    }),
  },
};

export const position = {
  container: style({
    display: "grid",
    rowGap: "0.5rem",
  }),
  header: style({
    display: "grid",
    gridAutoFlow: "column",
    columnGap: "1rem",
    justifyContent: "flex-start",
  }),
  company: style({}),
  position: style({}),
  meta: style({
    display: "grid",
    gridAutoFlow: "column",
    columnGap: "1rem",
    justifyContent: "flex-start",
    listStyleType: "none",
    fontSize: vars.size.small,
    color: vars.colour.muted,
  }),
  summary: style({}),
  tech: style({}),
};
