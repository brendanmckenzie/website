import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
  WebkitBoxSizing: "inherit",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "100%",
  fontWeight: "normal",
});

globalStyle(
  [
    "html",
    "body",
    "p",
    "ol",
    "ul",
    "li",
    "dl",
    "dt",
    "dd",
    "blockquote",
    "figure",
    "fieldset",
    "legend",
    "textarea",
    "pre",
    "iframe",
    "hr",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ].join(","),
  {
    margin: 0,
    padding: 0,
  }
);

globalStyle("hr", {
  backgroundColor: "whitesmoke",
  border: "none",
  display: "block",
  height: "2px",
  margin: "1.5rem 0",
});

globalStyle("body", {
  color: "#444",
  fontSize: "1rem",
  fontWeight: "normal",
  lineHeight: "1.5",

  fontFamily: `"Rubik", -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",
    sans-serif`,
});

globalStyle("code", {
  backgroundColor: "whitesmoke",
  color: "#da1039",
  fontWeight: "normal",
  padding: "0.25em 0.5em 0.25em",
});

globalStyle("pre code", {
  padding: 0,
  fontFamily: `"IBM Plex Mono", monospace`,
  fontSmooth: "auto",
});

globalStyle("a", {
  textDecoration: "none",
  color: "#084887",
});

globalStyle("a:hover", {
  opacity: 0.9,
});
