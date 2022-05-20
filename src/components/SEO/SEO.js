import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import favicon from "../../images/favicon.ico";

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
            <link rel="icon" type="image/png" href={favicon} />
        </Helmet>
    );
};

export default SEO;
