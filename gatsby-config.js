require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "SAO4 Data Dashboard",
    description:
      "Our office is committed to transparency and accountability. We will regularly release data on key decision-points and indicators of our performance. This effort is part of the Prosecutorial Performance Indicators (PPI), a national network of prosecutors and researchers working toward data-driven reforms.",
    siteUrl: process.env.SITE_URL || "https://localhost:8000",
  },
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
