import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Wrapper = styled.header`
    height: 3.75rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    background-color: ${({ header }) => header ? "rgba(30, 67, 86, 0.8)" : "transparent"};
    background-color: ${({ index }) => index ? "transparent" : "#1e4356"};
    transition: all .5s ease;
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 0.75rem;
    margin: 0 auto;
`;

const Header = ({ index }) => {
    const [header, setHeader] = useState(false);

    const changeHeaderBackground = () => {
        if (window.scrollY >= 80) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    window.addEventListener("scroll", changeHeaderBackground);

    return (
        <Wrapper header={header} index={index}>
            <Container>
                <Logo />
                <Navbar />
            </Container>
        </Wrapper>
    );
};

export default Header;
