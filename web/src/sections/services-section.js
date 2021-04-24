import React from "react";
import { css } from "@emotion/react";
import ServiceCard from "../components/service-card";
import theme from "../theme/theme";
import Wallet from "../assets/vectors/wallet.svg";
import Mail from "../assets/vectors/mail.svg";
import Business from "../assets/vectors/business.svg";
import Dots from "../assets/vectors/dots.svg";
import mq from "../lib/media";

const ServicesSection = () => {
  const {
    color: { offWhite },
  } = theme;
  return (
    <section
      id="services"
      css={css`
        background-color: ${offWhite};
            padding-bottom: 12rem;
}
      `}
    >
      <div className="container">
        <h2
          className="heading-2"
          css={css`
            text-align: center;
          `}
        >
          Wat wij voor je kunnen doen
        </h2>
        <ServiceCard
          imageFirst={false}
          headline="Boekhouding"
          paragraph="Videamus animi partes, quarum est conspectus illustrior; Neque solumea communia, verum etiam paria esse dixerunt. Sed hoc sane concedamus.De illis, cum volemus. Multoque hoc melius nos veriusque quam Stoici."
        >
          <Wallet />
        </ServiceCard>
        <ServiceCard
          imageFirst={true}
          headline="Inkomstenbelasting aangifte"
          paragraph="Videamus animi partes, quarum est conspectus illustrior; Neque solumea communia, verum etiam paria esse dixerunt. Sed hoc sane concedamus.De illis, cum volemus. Multoque hoc melius nos veriusque quam Stoici."
        >
          <Mail />
        </ServiceCard>
        <ServiceCard
          imageFirst={false}
          headline="BTW-aangifte"
          paragraph="Videamus animi partes, quarum est conspectus illustrior; Neque solumea communia, verum etiam paria esse dixerunt. Sed hoc sane concedamus.De illis, cum volemus. Multoque hoc melius nos veriusque quam Stoici."
        >
          <Business />
        </ServiceCard>
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              position: absolute;
              right: -13rem;
              bottom: -18rem;
              max-width: 409px;
              ${mq("lg")} {
                bottom: -18rem;
                right: -20rem;
              }
              ${mq("md")} {
                max-width: 307.5px;
                right: -25rem;
              }
            `}
          >
            <Dots />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
