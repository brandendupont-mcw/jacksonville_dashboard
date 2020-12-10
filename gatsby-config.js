require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "SAO4",
    description:
      "Our office is committed to transparency and accountability. Therefore, we annually release data on key decision-points and our performance.",
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
