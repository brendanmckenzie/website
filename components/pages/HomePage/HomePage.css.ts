import { style } from "@vanilla-extract/css";

export { container, footer, footerItem } from "../shared.css";

export const header = style({});

export const headerTitle = style({
  fontSize: "2.5rem",
  lineHeight: "1.2",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "#222",
});

export const heading = style({
  fontSize: "1.25rem",
  textTransform: "uppercase",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#222",
});

export const socials = style({
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  gridAutoFlow: "column",
  columnGap: "1.5rem",
});

export const socialItem = style({
  display: "grid",
  alignContent: "center",
  justifyContent: "center",
  padding: "0.75rem",
  borderRadius: "40px",
  ":hover": {
    opacity: "0.9",
  },
});

export const twitter = style([
  socialItem,
  {
    backgroundColor: "#1da1f2",
    color: "white",
  },
]);
export const github = style([
  socialItem,
  {
    backgroundColor: "#181717",
    color: "white",
  },
]);
export const instagram = style([
  socialItem,
  {
    backgroundColor: "#e4405f",
    color: "white",
  },
]);
export const linkedin = style([
  socialItem,
  {
    backgroundColor: "#0a66c2",
    color: "white",
  },
]);
export const email = style([
  socialItem,
  {
    backgroundColor: "white",
    border: "1px solid #ddd",
    color: "#222",
    ":hover": {
      borderColor: "#aaa",
    },
  },
]);

export const socialIcon = style({ height: "1.25rem", width: "1.25rem" });
