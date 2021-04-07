// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name:
          "Renti Administratiekantoor | Voor al uw boekhouding, belasting- en BTW-aanggifte",
        short_name: "Renti Administratiekantoor",
        description: "Voor al uw boekhouding, belasting- en BTW-aangifte",
        start_url: "/",
        lang: "nl",
        background_color: "#FEFBF4",
        theme_color: "#09192B",
        display: "standalone",
        icon: "src/assets/img/512-512-favicon.svg",
      },
    },
    "gatsby-plugin-emotion",
  ],
};
