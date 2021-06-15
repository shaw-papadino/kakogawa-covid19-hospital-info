module.exports = {
  siteMetadata: {
    title: "kakogawa-covid19-hospital",
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
  ],
  pathPrefix: "/kakogawa-covid19-hospital-info",
};
