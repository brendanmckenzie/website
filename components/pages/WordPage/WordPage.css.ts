import { style } from "@vanilla-extract/css";

export { container } from "../shared.css";

export const input = style({
  display: "grid",
  width: "100%",

  padding: "0.25rem 0.5rem",
  marginBottom: "1rem",
  fontFamily: "inherit",
  fontSize: "inherit",
});

export const words = style({
  listStyle: "none",
  display: "grid",
  rowGap: "0.75rem",
});

export const suggestionButton = style({
  backgroundColor: "transparent",
  fontSize: "inherit",
  fontFamily: "inherit",
  border: "none",
  fontWeight: "inherit",
  fontStyle: "italic",
  textDecoration: "underline",
});

export const word = style({
  fontSize: "1.25rem",
});

export const definitions = style({
  listStyleType: "disc",
  marginTop: "0.25rem",
  marginLeft: "2rem",
  display: "grid",
  rowGap: "0.5rem",
});
