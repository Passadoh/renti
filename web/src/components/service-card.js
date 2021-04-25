import React from "react";
import { css } from "@emotion/react";
import mq from "../lib/media";

const Text = ({ headline, paragraph }) => (
  <>
    <h3 className="heading-3">{headline}</h3>
    <p className="paragraph">{paragraph}</p>
  </>
);

const ServiceCard = ({ imageFirst, headline, paragraph, children }) => {
  const COL_STYLES = css`
    flex: 0 1 50%;
    max-width: 48rem;
    margin: 0 auto;

    ${mq("sm")} {
      flex: 0 1 100%;
      max-width: unset;
    }
  `;

  const IMAGE_CONTAINER_STYLES = css`
    display: flex;
    justify-content: center;

    & > svg {
      width: 100%;
      height: auto;
      & > g {
        -webkit-clip-path: url("clip0");
      }
    }
    height: 265px;
    max-height: 265px;
    ${mq("lg")} {
      max-height: 200px;
    }
    ${mq("sm")} {
      max-height: 100px;
      margin-bottom: 2rem;
    }
  `;

  return (
    <div
      className="flexbox"
      css={css`
        margin-top: 10rem;
        flex-wrap: wrap;

        ${mq("sm")} {
          flex-direction: ${imageFirst ? "unset" : "column-reverse"};
        }

        & > *:not(:first-of-type) {
          padding-left: 15px;
          ${mq("sm")} {
            padding-left: unset;
          }
        }

        & > *:not(:last-child) {
          padding-right: 15px;
          ${mq("sm")} {
            padding-right: unset;
          }
        }

        &:not(:first-of-type) {
          margin-top: 12rem;
          ${mq("sm")} {
            margin-top: 6rem;
          }
        }
        align-items: center;
      `}
    >
      <div css={COL_STYLES}>
        {imageFirst ? (
          <div css={IMAGE_CONTAINER_STYLES}>{children}</div>
        ) : (
          <Text headline={headline} paragraph={paragraph} />
        )}
      </div>
      <div css={COL_STYLES}>
        {imageFirst ? (
          <Text headline={headline} paragraph={paragraph} />
        ) : (
          <div css={IMAGE_CONTAINER_STYLES}>{children}</div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
