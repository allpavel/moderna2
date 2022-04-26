import React from "react";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { v4 as uuidv4 } from "uuid";

const query = graphql`
    {
        allStrapiPortfolio {
            nodes {
                image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 575px) {
        padding: 0;
        margin: 0 1rem;
    }
`;

const ImageContainer = styled.div`
    padding: 0.5rem;
    width: 30%;

    .gatsby-image-wrapper picture {
        background: #1e4356;
        overflow: hidden;
    }

    .gatsby-image-wrapper picture img {
        transition: all 0.4s ease;
    }

    :hover .gatsby-image-wrapper picture img {
        opacity: 0 !important;
        transform: scale(1.1);
    }

    @media screen and (max-width: 575px) {
        margin-bottom: 1rem;
        padding: 0;
    }
`;

const Items = () => {
    const data = useStaticQuery(query);
    const images = data.allStrapiPortfolio.nodes;
    return (
        <Container>
            {images.map(item => {
                const imageItem = getImage(item.image[0].localFile);
                return (
                    <ImageContainer key={uuidv4()}>
                        <GatsbyImage image={imageItem} alt="" />
                    </ImageContainer>
                );
            })}
        </Container>
    );
};

export default Items;
