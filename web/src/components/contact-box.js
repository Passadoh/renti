import React from "react";
import { css } from "@emotion/react";
import theme from "../theme/theme";
import mq from "../lib/media";

const ContactBox = ({ icon, children }) => {
  const {
    color: { offBlack },
  } = theme;
  return (
    <div
      css={css`
        width: 267px;
        height: 225px;
        border: 1px solid ${offBlack};
        border-radius: 8px;
        font-size: 1.6rem;
        padding: 3.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        ${mq("lg")} {
          padding: 1.4rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        {icon}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default ContactBox;
