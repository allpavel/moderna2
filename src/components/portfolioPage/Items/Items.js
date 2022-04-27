import React from "react";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import { BiPlus, BiLink } from "react-icons/bi";

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

const Info = styled.div`
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    opacity: 0;
    top: 10%;
    transition: all 0.4s linear;

    h2 {
        color: #fff;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    svg {
        font-size: 2rem;
        color: #fff;
        opacity: 0.7;
        transition: all 0.4s ease;

        :hover {
            cursor: pointer;
            opacity: 1;
        }
    }
`;

const ImageContainer = styled.div`
    padding: 0.5rem;
    width: 30%;
    position: relative;

    .gatsby-image-wrapper picture {
        background: #1e4356;
        overflow: hidden;
    }

    .gatsby-image-wrapper picture img {
        transition: all 0.4s ease;
    }

    :hover .gatsby-image-wrapper picture img {
        opacity: 0.5 !important;
        filter: brightness(60%);
        transform: scale(1.1);
    }

    :hover {
        ${Info} {
            opacity: 1;
            top: calc(50% - 60px);
        }
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
                        <Info>
                            <h2>App</h2>
                            <BiPlus />
                            <BiLink />
                        </Info>
                    </ImageContainer>
                );
            })}
        </Container>
    );
};

export default Items;
