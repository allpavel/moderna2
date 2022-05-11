import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
    {
        site {
            siteMetadata {
                title
                author
                description
            }
        }
    }
`;

const SEO = ({ title, description }) => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(query);
    const metaDescription = description || siteMetadata.description;
    return (
        <Helmet
            htmlAttributes={{ lang: "en" }}
            meta={[
                {
                    name: "description",
                    content: metaDescription,
                },
            ]}
        >
            <title>{`${title} | ${siteMetadata.title}`}</title>
        </Helmet>
    );
};

export default SEO;
