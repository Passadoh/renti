import { css } from "@emotion/react";
import theme from "../theme";

const TYPOGRAPHY = css`
  body {
    color: ${theme.color.black};
    font-family: Montserrat, sans-serif;
    font-size: 2.2rem;
    line-height: 132.1%;
    letter-spacing: 0.03em;
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
  }
  .title {
    font-family: Cormorant Infant, Serif;
    font-weight: 700;
    font-size: 5.2rem;
    line-height: 123.18%;
    letter-spacing: -0.02em;
  }
  .sub-title {
    color: ${theme.color.offBlack};
    font-size: 2.4rem;
    font-weight: 300;
  }

  .heading-2 {
    font-family: Cormorant Infant, Serif;
    font-weight: 700;
    font-size: 4rem;
    line-height: 123.18%;
    letter-spacing: -0.02em;
  }

  .heading-3 {
    font-family: Cormorant Infant, Serif;
    font-weight: 700;
    font-size: 3rem;
    line-height: 123.18%;
    letter-spacing: -0.02em;
  }

  .paragraph {
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;
    &:link, &:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
    }
  }

  a.anchor {
      font-size: 1.6rem;
      text-decoration-line: underline;

      &:hover {
        transition: color ${theme.transition};
        color: ${theme.color.primaryDark};
      }
  }

  a.button, button.button {
    display: inline-block;
    font-weight: 600;
    font-size: 1.9rem;
    background: ${theme.color.primaryDark};
    padding: 14px 64px;
    border-radius: 4px;
    transition: background-color ${theme.transition};
    &--shadow {
      box-shadow: ${theme.shadow};
    }
    &:hover {
      background-color: ${theme.color.primaryDarkHover};
    }
  }
  input, textarea {
    &:focus {
      caret-color: ${theme.color.primaryDark};
      outline: none;
      border: 1px solid ${theme.color.primaryDark};
      box-shadow: 0 0 10px ${theme.color.primaryDark};
    }
  }
},
`;

export default TYPOGRAPHY;
