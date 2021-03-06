import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useGetPath from "../../hooks/useGetPath";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Layout from "../../components/Layout/Layout";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Seo from "../../components/SEO/SEO";

export const query = graphql`
    query getSinglePortfolioItem($title: String) {
        strapiPortfolio(title: { eq: $title }) {
            title
            url
            image {
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            category
            date
            description
            client
        }
    }
`;

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const Container = styled.section`
    max-width: var(--max-width-desktop);
    margin: 5rem auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
        margin: 1rem auto;
    }
`;

const Image = styled.div`
    padding-right: 1rem;
    text-align: center;

    @media screen and (max-width: 992px) {
        padding-right: 0;
    }
`;

const Text = styled.div`
    padding-left: 1rem;

    @media screen and (max-width: 992px) {
        padding: 1rem 0;
    }
`;

const ProjectInformation = styled.div`
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0px 0 30px rgba(30, 67, 86, 0.08);

    h2 {
        margin: 0;
        padding-bottom: 1rem;
        border-bottom: 2px solid #eee;
    }

    ul {
        margin-bottom: 0;
        padding-left: 0;
    }

    li {
        padding-bottom: 1rem;
        list-style: none;
    }

    @media screen and (max-width: 575px) {
        padding: 1rem;
    }
`;

const Description = styled.div``;

const PortfolioItemTemplate = ({
    data: {
        strapiPortfolio: {
            title: itemTitle,
            url,
            category,
            date,
            description: itemDescription,
            client,
            image: { localFile },
        },
    },
}) => {
    const imageItem = getImage(localFile);

    const path = useGetPath();

    const metaTitle = itemTitle[0].toUpperCase() + itemTitle.slice(1);

    return (
        <Layout>
            <Seo title={metaTitle} description="This is a portfolio item page" />
            <Wrapper>
                <Breadcrumbs path={path} />
                <Container>
                    <Image>
                        <GatsbyImage image={imageItem} alt={`image of ${metaTitle}`} />
                    </Image>
                    <Text>
                        <ProjectInformation>
                            <h2>Project Information</h2>
                            <ul>
                                <li>
                                    <b>Title</b>: {metaTitle}
                                </li>
                                <li>
                                    <b>Category</b>: {category}
                                </li>
                                <li>
                                    <b>Client</b>: {client}
                                </li>
                                <li>
                                    <b>Project date</b>: {date}
                                </li>
                                <li>
                                    <b>Project URL</b>: {url}
                                </li>
                            </ul>
                        </ProjectInformation>
                        <Description>
                            <h2>Description:</h2>
                            <p>{itemDescription}</p>
                        </Description>
                    </Text>
                    <ScrollToTop />
                </Container>
            </Wrapper>
        </Layout>
    );
};

export default PortfolioItemTemplate;
