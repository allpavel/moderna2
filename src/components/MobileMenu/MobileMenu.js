import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.nav`
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(17, 38, 48, 0.95);
    overflow: hidden;
    z-index: 10;
    transition: all 0.4s ease;

    @media screen and (min-width: 991px) {
        display: none;
    }

    ul {
        position: absolute;
        top: 3.5rem;
        bottom: 1rem;
        right: 1rem;
        left: 1rem;
        padding: 10px 0;
        background-color: #fff;
        overflow-y: auto;
    }

    li {
        list-style: none;
        text-align: center;
        margin: 1.5rem 0;
    }

    li a {
        width: 100%;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.2rem;
        color: #000;
        transition: all 0.5s ease;

        &:hover {
            color: var(--main-color);
        }
    }

    .active {
        color: var(--main-color);
    }
`;

const MobileMenu = ({ isOpen }) => {
    return (
        <Wrapper isOpen={isOpen}>
            <ul>
                <li>
                    <Link to="/" activeClassName="active">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about/" activeClassName="active">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/services/" activeClassName="active">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio/" activeClassName="active">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/team/" activeClassName="active">
                        Team
                    </Link>
                </li>
                <li>
                    <Link to="/blog/" activeClassName="active">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/contact/" activeClassName="active">
                        Contact
                    </Link>
                </li>
            </ul>
        </Wrapper>
    );
};

export default MobileMenu;
