require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: "Moderna",
        description: "Moderna with Strapi",
        author: "Pavel Alloyarov",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: process.env.STRAPI_API_URL,
                accessToken: process.env.STRAPI_TOKEN,
                collectionTypes: ["team", "portfolio", "blog"],
            },
        },
    ],
};
