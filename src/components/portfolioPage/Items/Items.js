import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import { BiPlus, BiLink } from "react-icons/bi";

const query = graphql`
    {
        allStrapiPortfolio {
            nodes {
                title
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;

    @media screen and (max-width: 575px) {
        padding: 0;
        margin: 0;
        gap: 0;
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
    position: relative;

    .gatsby-image-wrapper {
        background: #1e4356;
    }

    .gatsby-image-wrapper picture {
        overflow: hidden;
    }

    .gatsby-image-wrapper picture img {
        transition: all 0.4s linear;
    }

    :hover .gatsby-image-wrapper picture img {
        opacity: 0.5 !important;
        transform: scale(1.1);
    }

    :hover {
        ${Info} {
            opacity: 1;
            top: calc(50% - 60px);
        }
    }

    @media screen and (max-width: 575px) {
        padding: 1rem;
    }
`;

const Items = () => {
    const data = useStaticQuery(query);
    const images = data.allStrapiPortfolio.nodes;
    return (
        <Container>
            {images.map(item => {
                const imageItem = getImage(item.image.localFile);
                return (
                    <ImageContainer key={uuidv4()}>
                        <GatsbyImage image={imageItem} alt="" />
                        <Info>
                            <h2>App</h2>
                            <BiPlus />
                            <Link to={item.title}>
                                <BiLink />
                            </Link>
                        </Info>
                    </ImageContainer>
                );
            })}
        </Container>
    );
};

export default Items;
