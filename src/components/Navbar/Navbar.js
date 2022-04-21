import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const ChevronDown = styled(BsChevronDown)`
    color: #fff;
    font-size: 0.75rem;
    margin-left: 3px;
    transition: all 0.3s ease;
`;

const ChevronRight = styled(BsChevronRight)`
    color: #000;
    font-size: 0.75rem;
    margin-left: 3px;
    transition: all 0.3s ease;
`;

const Wrapper = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    ul {
        display: flex;
        align-items: center;
        justify-content: end;
        height: 100%;
        margin: 0;
    }

    li {
        display: flex;
        align-items: center;
        height: 2.75rem;
        list-style: none;
    }

    li a {
        padding: 0.625rem 0 0.625rem 2rem;
        text-decoration: none;
        color: #fff;
        transition: all 0.3s ease;
    }

    li a:hover {
        color: var(--main-color);

        ${ChevronDown} {
            color: var(--main-color);
        }

        ${ChevronRight} {
            color: var(--main-color);
        }
    }

    .active {
        color: var(--main-color);
    }

    @media screen and (max-width: 991px) {
        display: none;
    }
`;

const Dropdown = styled.li`
    position: relative;

    ul li a {
        color: #000;
    }

    :hover > ul {
        opacity: 1;
        visibility: visible;
        top: 100%;
    }

    ul {
        display: block;
        position: absolute;
        left: 0;
        top: calc(100% + 1.875rem);
        box-shadow: 0px 0px 30px rgb(127 137 161 / 25%);
        opacity: 0;
        visibility: hidden;
        z-index: 99;
        transition: all 0.3s ease;
        padding: 0;
    }

    ul li {
        background-color: #fff;
        min-width: 150px;
        padding: 0;
    }

    ul li ul {
        top: 0;
        left: calc(100% - 1.875rem);
    }

    ul li ul li {
        min-width: 200px;
    }

    ul li:hover > ul {
        top: 0;
        left: 100%;

        @media screen and (max-width: 1400px) {
            left: -130%;
        }
    }
`;

const Navbar = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to="/" activeClassName="active">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" activeClassName="active">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/team">Team</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <Dropdown>
                    <a href="#">
                        Dropdown <ChevronDown />
                    </a>
                    <ul>
                        <li>
                            <a href="#">Dropdown 1</a>
                        </li>
                        <Dropdown>
                            <a href="#">
                                Dropdown 2 <ChevronRight />
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Deep Dropdown 1</a>
                                </li>
                                <li>
                                    <a href="#">Deep Dropdown 2</a>
                                </li>
                                <li>
                                    <a href="#">Deep Dropdown 3</a>
                                </li>
                                <li>
                                    <a href="#">Deep Dropdown 4</a>
                                </li>
                                <li>
                                    <a href="#">Deep Dropdown 5</a>
                                </li>
                            </ul>
                        </Dropdown>
                        <li>
                            <a href="#">Dropdown 3</a>
                        </li>
                        <li>
                            <a href="#">Dropdown 4</a>
                        </li>
                        <li>
                            <a href="#">Dropdown 5</a>
                        </li>
                    </ul>
                </Dropdown>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Navbar;
