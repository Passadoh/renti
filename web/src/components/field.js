import React from "react";
import { css } from "@emotion/react";
import theme from "../theme/theme";
import mq from "../lib/media";

const Field = ({ label, type, name }) => {
  const LABEL_STYLES = css`
    font-weight: 700;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    ${mq("lg")} {
      max-width: 31rem;
    }
    ${mq("md")} {
      max-width: unset;
    }
  `;

  if (type === "textarea")
    return (
      <label css={LABEL_STYLES}>
        {label}
        <textarea
          style={{ resize: "none" }}
          name={name}
          css={css`
            color: ${theme.color.black};
            font-family: Montserrat, sans-serif;
            font-size: 2.2rem;
            line-height: 132.1%;
            letter-spacing: 0.03em;
            font-weight: 400;
            font-style: normal;
            text-rendering: optimizeLegibility;
            border-radius: 2px;
            margin-top: 1.9rem;
            height: 234px;
            border: none;
            background: #fff;
            box-shadow: inset 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
          `}
        />
      </label>
    );
  return (
    <label css={LABEL_STYLES}>
      {label}
      <input
        type={type}
        name={name}
        css={css`
          color: ${theme.color.black};
          font-family: Montserrat, sans-serif;
          font-size: 2.2rem;
          line-height: 132.1%;
          letter-spacing: 0.03em;
          font-weight: 400;
          font-style: normal;
          text-rendering: optimizeLegibility;
          padding-left: 2rem;
          border-radius: 2px;
          margin-top: 1.9rem;
          height: 61px;
          border: none;
          background: #fff;
          box-shadow: inset 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
        `}
      />
    </label>
  );
};

export default Field;
