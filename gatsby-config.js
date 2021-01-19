require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "SAO4",
    description:
      "Our office is committed to transparency and accountability. We will regularly release data on key decision-points and indicators of our performance. This effort is part of the Prosecutorial Performance Indicators (PPI), a national network of prosecutors and researchers working toward data-driven reforms.",
    siteUrl: process.env.SITE_URL || "https://localhost:8000",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GTM-TMTMFTK", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-post",
    "@reflexjs/gatsby-theme-video",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
  ],
};
