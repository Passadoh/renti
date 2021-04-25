import React from "react";
import { css } from "@emotion/react";
import ContactBox from "../components/contact-box";
import LocationIcon from "../assets/vectors/location.svg";
import EmailIcon from "../assets/vectors/email.svg";
import PhoneIcon from "../assets/vectors/phone.svg";
import theme from "../theme/theme";
import ContactForm from "../components/contact-form";
import mq from "../lib/media";
import ContactIllustration from "../assets/vectors/contact.svg";

const ContactSection = () => {
  const {
    color: { offWhite },
  } = theme;
  return (
    <section
      id="contact"
      css={css`
        background-color: ${offWhite};
        padding-bottom: 17rem;
      `}
    >
      <div className="container">
        <div
          css={css`
            max-width: 510px;
            margin: 0 auto;
            text-align: center;
          `}
        >
          <h2 className="heading-2">Kom in contact met ons</h2>
          <p
            className="paragraph"
            css={css`
              margin: 2.8rem 0;
            `}
          >
            Videamus animi partes, quarum est conspectus illustrior; Neque solum
            ea communia.
          </p>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;

            ${mq("md")} {
              flex-direction: column;
            }

            & > div:not(:first-of-type) {
              margin-left: 15px;
              ${mq("md")} {
                margin: 0 auto 0 auto;
              }
            }

            & > div:not(:last-child) {
              margin-right: 15px;
              ${mq("md")} {
                margin: 0 auto 3.4rem auto;
              }
            }
          `}
        >
          <ContactBox icon={<LocationIcon />}>
            Goudsbloemstraat 33 3812 WT Amersfoort
          </ContactBox>
          <ContactBox icon={<EmailIcon />}>info@renti.nu</ContactBox>
          <ContactBox icon={<PhoneIcon />}>+31 06 20 77 67 12</ContactBox>
        </div>
        <ContactForm />
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              position: absolute;
              right: -13rem;
              bottom: -22rem;
              width: 644px;
              max-width: 644px;

              & > svg {
                width: 100%;
                height: auto;
                & > g {
                  -webkit-clip-path: url("clip0");
                }
              }

              ${mq("xl")} {
                max-width: 510px;
              }

              ${mq("lg")} {
                max-width: 422px;
              }
              ${mq("md")} {
                max-width: 322px;
              }
              ${mq("sm")} {
                max-width: 222px;
                right: -6rem;
                bottom: -22rem;
              }
            `}
          >
            <ContactIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
