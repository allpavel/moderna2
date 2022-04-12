import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "@reach/router";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";

const IndexHeader = css`
    background-color: ${({ header }) => (header ? "rgba(30, 67, 86, 0.8)" : "transparent")};
`;

const NormalHeader = css`
    background-color: ${({ header }) => (header ? "rgba(30, 67, 86, 0.8)" : "rgb(30, 67, 86)")};
`;

const Wrapper = styled.header`
    height: 3.75rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    ${({ location }) => (location.pathname === "/" ? IndexHeader : NormalHeader)}
    transition: all 0.5s ease;
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
    padding: 0 0.75rem;
    margin: 0 auto;

    @media screen and (max-width: 1500px) {
        max-width: 1000px;
    }
    @media screen and (max-width: 1280px) {
        max-width: 900px;
    }

    @media screen and (min-width: 769px) {
        width: 100vw;
    }
`;

const Header = () => {
    const [header, setHeader] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    const changeHeaderBackground = () => {
        if (window.scrollY >= 80) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    window.addEventListener("scroll", changeHeaderBackground);

    return (
        <Wrapper header={header} location={location}>
            <Container>
                <Logo />
                <Navbar />
                <MobileMenu isOpen={isOpen} />
            </Container>
        </Wrapper>
    );
};

export default Header;
