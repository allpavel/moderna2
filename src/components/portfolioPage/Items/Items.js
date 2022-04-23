import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

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

const Image = styled.div`
    overflow: hidden;
    width: 100%;
    transition: all 0.5s ease;
`;

const ImageItem = styled.div`
    position: relative;
    padding: 0.5rem;
    width: 30%;
    overflow: hidden;

    :hover {
        ${Image} {
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 575px) {
        margin-bottom: 1rem;
        padding: 0;
    }
`;

const Items = () => {
    return (
        <Container>
            <ImageItem>
                <Image>
                    <StaticImage src="../../../images/portfolio/portfolio-1.jpg" alt="image 1" placeholder="blurred" />
                </Image>
            </ImageItem>
            <ImageItem>
                <StaticImage
                    src="../../../images/portfolio/portfolio-2.jpg"
                    alt="image 1"
                    placeholder="blurred"
                    layout="constrained"
                    width={416}
                />
            </ImageItem>
            <ImageItem>
                <StaticImage
                    src="../../../images/portfolio/portfolio-3.jpg"
                    alt="image 1"
                    placeholder="blurred"
                    layout="constrained"
                    width={416}
                />
            </ImageItem>
            <ImageItem>
                <StaticImage
                    src="../../../images/portfolio/portfolio-4.jpg"
                    alt="image 1"
                    placeholder="blurred"
                    layout="constrained"
                    width={416}
                />
            </ImageItem>
            <ImageItem>
                <StaticImage
                    src="../../../images/portfolio/portfolio-5.jpg"
                    alt="image 1"
                    placeholder="blurred"
                    layout="constrained"
                    width={416}
                />
            </ImageItem>
            <ImageItem>
                <StaticImage
                    src="../../../images/portfolio/portfolio-6.jpg"
                    alt="image 1"
                    placeholder="blurred"
                    layout="constrained"
                    width={416}
                />
            </ImageItem>
        </Container>
    );
};

export default Items;
