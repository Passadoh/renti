import React from "react";
import { css } from "@emotion/react";
import PortableText from "./portable-text";
import theme from "../theme/theme";
import mq from "../lib/media";

const Page = (props) => {
  const {
    color: { offWhite },
  } = theme;
  return (
    <section
      className="privacy-section"
      css={css`
        background-color: ${offWhite};
      `}
    >
      <div
        className="container"
        css={css`
          margin: 6rem auto 12rem auto;
          ${mq("md")} {
            margin: 3rem auto 6rem auto;
          }
        `}
      >
        <h1 className="heading-1">{props.title}</h1>
        <div
          css={css`
            max-width: 700px;
            padding-top: 1.2rem;
            margin-bottom: 3.4rem;
          `}
        >
          <PortableText blocks={props._rawExcerpt} />
        </div>
        <div
          className="paragraph"
          css={css`
            max-width: 700px;
            line-height: 3.2rem;
            & > div > p:not(:last-child) {
              margin-bottom: 3.4rem;
            }

            & > div > h2:not(:last-child) {
              margin: 4rem 0 1.2rem 0;
            }
            & > div > h3:not(:last-child) {
              margin: 4rem 0 1rem 0;
            }
            & > div > h4:not(:last-child) {
              margin: 4rem 0 0rem 0;
            }
            & li:not(:last-child) {
              margin-bottom: 1rem;
            }
            ul {
              padding-left: 4rem;
              margin: 3.4rem 0;
              list-style: unset;
            }
            ol {
              list-style: none;
              margin-bottom: 3.4rem;
            }

            p + ol {
              margin-top: -1.4rem;
            }
          `}
        >
          <PortableText blocks={props._rawBody} />
        </div>
      </div>
    </section>
  );
};

export default Page;
