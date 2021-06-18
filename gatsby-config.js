module.exports = {
  siteMetadata: {
    title: "加古川市内コロナワクチン個別接種対応医療機関まとめ",
    siteUrl: "https://shaw-papadino.github.io/kakogawa-covid19-hospital-info",
    description:
      "加古川市でコロナワクチン個別接種を実施している医療機関の情報をまとめたサイトです.",
    lang: "ja",
    twitterUsername: "papa_ok_san",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-8RXFHJE1NN", // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
      },
    },
  ],
  pathPrefix: "/kakogawa-covid19-hospital-info",
};
