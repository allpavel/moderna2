const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allStrapiBlog(limit: 100, sort: { fields: data, order: DESC }) {
                edges {
                    node {
                        title
                        postAuthor
                        data
                        slug
                    }
                }
            }
        }
    `);

    const posts = result.data.allStrapiBlog.edges;
    const postPerPage = 3;
    const numPages = Math.ceil(posts.length / postPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? "/blog" : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/blog-list-template.js"),
            context: {
                limit: postPerPage,
                skip: i * postPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });
};
