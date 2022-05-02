import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Layout from "../../components/Layout/Layout";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
    margin: 1rem auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

    @media screen and (max-width: 575px) {
        margin: 0 1rem;
    }
`;

const Image = styled.div`
    padding-right: 1rem;

    @media screen and (max-width: 992px) {
        padding-right: 0;
    }
`;

const Text = styled.div`
    padding-left: 1rem;

    @media screen and (max-width: 846px) {
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
`;

const Description = styled.div``;

const PortfolioItemTemplate = ({
    data: {
        strapiPortfolio: {
            title,
            url,
            category,
            date,
            description,
            client,
            image: { localFile },
        },
    },
}) => {
    const imageItem = getImage(localFile);
    return (
        <Layout>
            <Wrapper>
                <Breadcrumbs page={<Link to="/portfolio">Portfolio</Link>} />
                <Container>
                    <Image>
                        <GatsbyImage image={imageItem} alt={`image of ${title}`} />
                    </Image>
                    <Text>
                        <ProjectInformation>
                            <h2>Project Information</h2>
                            <ul>
                                <li>Title: {title[0].toUpperCase() + title.slice(1)}</li>
                                <li>Category: {category}</li>
                                <li>Client: {client}</li>
                                <li>Project date: {date}</li>
                                <li>Project URL: {url}</li>
                            </ul>
                        </ProjectInformation>
                        <Description>
                            <h2>Description:</h2>
                            <p>{description}</p>
                        </Description>
                    </Text>
                    <ScrollToTop />
                </Container>
            </Wrapper>
        </Layout>
    );
};

export default PortfolioItemTemplate;
