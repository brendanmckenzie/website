import { style } from "@vanilla-extract/css";

export { container } from "../shared.css";

export { input } from "../WordPage/WordPage.css";

export const svg = style({
  display: "flex",
  justifyContent: "center",
});

export const download = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
});
