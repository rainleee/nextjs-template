import { globalCss } from "./stitches.config";

export const resetCss = globalCss({
  body: {
    margin: "0",
    padding: "0",
    height: "100%",
  },

  "*": {
    WebkitBoxSizing: "border-box",
    boxSizing: "border-box",
    lineHeight: "1.5",
    scrollbarWidth: "auto",
    scrollbarColor: "#5c5c5c #ffffff",
    padding: "0",
    margin: "0",
    fontFamily: "suit",
  },
  a: {
    display: "block",
    color: "#333333",
    textDecoration: "none",
  },
  "a:focus, button:focus, input:focus, label:focus, select:focus, textarea:focus":
    {
      outline: "none",
    },
  "label, button, select": {
    cursor: "pointer",
  },
  "button[disabled]": {
    cursor: "not-allowed",
    backgroundColor: "#cccccc",
  },
  "dd, dl, ol, ul": {
    margin: "0",
    padding: "0",
  },
  li: {
    listStyle: "none",
  },
  "input[type=`checkbox`]": {
    width: "auto",
    cursor: "pointer",
  },
  /* Chrome, Safari, Edge, Opera input number arrow is hide */
  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: "0",
  },
  /* Firefox */
  "input[type=`number`]": {
    MozAppearance: "textfield",
  },
});
