import { css } from "@emotion/react";
import mq from "../../lib/media";
import theme from "../theme.js";

const BASE_STYLE = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;

    ${mq("md")} {
      font-size: 56%;
    }

    ${mq("sm")} {
      font-size: 52.5%;
    }
  }

  body {
    overflow-x: hidden;
    box-sizing: border-box;
  }

  select {
    outline: 0;
  }

  button,
  [type=\\"button\\"],
  [type=\\"reset\\"],
  [type=\\"submit\\"] {
    -webkit-appearance: button;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  section,
  footer {
    padding: 7rem ${theme.padding.base};

    ${mq("lg")} {
      padding: 7rem ${theme.padding.xl};
    }

    ${mq("md")} {
      padding: 7rem ${theme.padding.md};
    }

    ${mq("sm")} {
      padding: 7rem ${theme.padding.sm};
    }
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 1160px;
    margin-right: auto;
    margin-left: auto;
  }

  .flexbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flexbox.grid {
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 -15px;
  }

  .flexbox.grid .col {
    flex: 0 1 50%;
    padding-right: 15px;
    padding-left: 15px;

    ${mq("md")} {
      flex: 0 1 100%;
    }
  }
`;

export default BASE_STYLE;
