import React from "react";
import { css } from "@emotion/react";
import Field from "./field";
import mq from "../lib/media";

const ContactForm = () => {
  return (
    <div
      css={css`
        margin-top: 10rem;
      `}
    >
      <form name="contact" method="POST" data-netlify="true">
        <div
          css={css`
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: flex-start;

            & > *:not(:first-of-type) {
              padding-left: 2rem;
              ${mq("md")} {
                padding-left: 0;
              }
            }

            & > *:not(:last-child) {
              padding-right: 2rem;
              ${mq("md")} {
                padding-right: 0;
              }
            }
          `}
        >
          <div
            css={css`
              flex: 0 1 50%;
              ${mq("md")} {
                flex: 0 1 100%;
              }
              display: flex;
              flex-direction: column;

              & > label:not(:first-of-type) {
                margin-top: 5.4rem;
              }
            `}
          >
            <Field label="Naam" type="text" name="name" />
            <Field label="Email" type="email" name="email" />
            <Field label="Telefoonnummer" type="text" name="phone" />
          </div>
          <div
            css={css`
              flex: 0 1 50%;
              ${mq("md")} {
                margin-top: 5.4rem;
                flex: 0 1 100%;
              }
            `}
          >
            <Field label="Bericht" type="textarea" name="phone" />
          </div>
        </div>

        <div
          css={css`
            display: flex;
            justify-content: flex-start;
            margin-top: 6.5rem;

            padding-right: 2rem;
            ${mq("sm")} {
              padding-right: 0;
            }
          `}
        >
          <div
            css={css`
              flex: 0 1 50%;
              ${mq("sm")} {
                flex: 0 1 100%;

                & > button {
                  width: 100%;
                }
              }
            `}
          >
            <button className="button button--shadow" type="submit">
              Versturen
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
