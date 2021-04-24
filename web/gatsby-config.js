const path = require(`path`);

// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "assets", "img"),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /vectors/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name:
          "Renti Administratiekantoor | Voor al uw boekhouding, belasting- en BTW-aangifte",
        short_name: "Renti Administratiekantoor",
        description: "Voor al uw boekhouding, belasting- en BTW-aangifte",
        start_url: "/",
        lang: "nl-NL",
        background_color: "#F6F7FB",
        theme_color: "#7CD7AF",
        display: "standalone",
        icon: "src/assets/img/512-512-favicon.svg",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
