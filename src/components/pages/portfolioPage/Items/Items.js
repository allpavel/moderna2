import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { BiPlus, BiLink } from "react-icons/bi";
import PortfolioImageGallery from "../ImageGallery/PortfolioImageGallery";

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

const Items = ({ data }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenGallery = index => {
        setIsOpen(true);
        setImageIndex(index);
        document.body.style.overflow = "hidden";
    };

    return (
        <Container>
            {isOpen && (
                <PortfolioImageGallery data={data} imageIndex={imageIndex} isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            {data.map((item, index) => {
                const imageItem = getImage(item.image.localFile);
                return (
                    <ImageContainer key={item.id}>
                        <GatsbyImage image={imageItem} alt="" />
                        <Info>
                            <h2>App</h2>
                            <BiPlus onClick={() => handleOpenGallery(index)} />
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
