import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const query = graphql`
    {
        allImageSharp(sort: { fields: original___src, order: ASC }) {
            edges {
                node {
                    id
                    original {
                        src
                    }
                }
            }
        }
    }
`;

const Wrapper = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    overflow: hidden;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: all 0.5s linear;
`;

const Container = styled.div`
    padding: 0 1rem;

    .image-gallery-content.fullscreen {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 1rem;
    }
`;

const PortfolioImageGallery = ({ imageIndex, isOpen, setIsOpen }) => {
    const {
        allImageSharp: { edges },
    } = useStaticQuery(query);
    const images = edges.slice(6, 15).map(item => ({
        original: item.node.original.src,
    }));

    const handleCloseGallery = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <Wrapper isOpen={isOpen} onClick={handleCloseGallery}>
            <Container onClick={event => event.stopPropagation()}>
                <ImageGallery items={images} showBullets showPlayButton={false} startIndex={imageIndex} />;
            </Container>
        </Wrapper>
    );
};

export default PortfolioImageGallery;
