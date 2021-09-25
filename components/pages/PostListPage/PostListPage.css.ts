import { style } from "@vanilla-extract/css";

export { container, footer, footerItem } from "../shared.css";

export const heading = style({
  fontSize: "2.5rem",
  lineHeight: "1.2",
  textTransform: "uppercase",
  fontWeight: "bold",

  marginBottom: "1rem",
  paddingBottom: "1rem",

  borderBottom: "1px solid #ddd",
});

export const headingLink = style({
  textDecoration: "none",
  color: "#222",
});
