import React, { useEffect, useState } from "react";
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
    z-index: 10;
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
    padding: 0 1rem;
    margin: 0 auto;
`;

const MenuIcon = styled(MdMenu)`
    display: none;
    @media screen and (max-width: 991px) {
        display: block;
        width: 2rem;
        height: 2rem;
        color: #fff;
        cursor: pointer;
        z-index: 100;
    }
`;

const CloseIcon = styled(MdClose)`
    display: none;
    @media screen and (max-width: 991px) {
        display: block;
        width: 2rem;
        height: 2rem;
        color: #fff;
        cursor: pointer;
        z-index: 100;
    }
`;

const Header = ({ isOpen, handleMobileMenuClick }) => {
    const [header, setHeader] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleMobileMenuClick = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        const changeHeaderBackground = () => {
            if (window.scrollY >= 80) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };

        window.addEventListener("scroll", changeHeaderBackground);

        return () => window.removeEventListener("scroll", changeHeaderBackground);
    }, [header]);

    return (
        <Wrapper header={header} location={location}>
            <Container>
                <Logo />
                <Navbar />
                {isOpen ? <CloseIcon onClick={handleMobileMenuClick} /> : <MenuIcon onClick={handleMobileMenuClick} />}
                <MobileMenu isOpen={isOpen} />
            </Container>
        </Wrapper>
    );
};

export default Header;
