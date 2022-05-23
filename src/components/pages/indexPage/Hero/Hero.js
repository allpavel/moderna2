import React from "react";
import styled from "styled-components";
import HeroImage from "../../../../images/hero-bg.webp";
import HeroSwiper from "../HeroSwiper/HeroSwiper";

const Wrapper = styled.section`
    width: 100%;
    height: 90vh;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 130%;
        height: 96%;
        z-index: 0;
        background: var(--hero-color);
        transform: translateX(-50%) translateY(18px) rotate(2deg);
        border-radius: 0 0 50% 50%;
        opacity: 0.3;
    }

    ::after {
        content: "";
        background: linear-gradient(to right, rgba(30, 67, 86, 0.8), rgba(30, 67, 86, 0.6)),
            url(${HeroImage}) center top no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 50%;
        width: 130%;
        height: 95%;
        z-index: 0;
        transform: translateX(-50%);
        border-radius: 0 0 50% 50%;
    }
`;

const Hero = () => {
    return (
        <Wrapper>
            <HeroSwiper />
        </Wrapper>
    );
};

export default Hero;
