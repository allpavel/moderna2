import React from "react";
import styled from "styled-components";
import { BsCheck, BsX } from "react-icons/bs";

const Wrapper = styled.section`
    padding: 3.75rem 0;
    background-color: var(--light-blue-color);

    @media screen and (max-width: 575px) {
        padding: 3rem 0 2rem;
    }
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;

    @media screen and (max-width: 575px) {
        margin: 0 1rem;
    }
`;

const Title = styled.article`
    text-align: center;
    padding-bottom: 1.875rem;

    h2 {
        font-size: 1.75rem;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 1.25rem;
        padding-bottom: 1.25rem;
        position: relative;
    }

    h2:before {
        content: "";
        position: absolute;
        display: block;
        width: 7.5rem;
        height: 1px;
        background-color: #ddd;
        bottom: 1px;
        left: calc(50% - 3.75rem);
    }

    h2:after {
        content: "";
        position: absolute;
        display: block;
        width: 2.5rem;
        height: 3px;
        background-color: var(--hero-color);
        bottom: 0;
        left: calc(50% - 1.25rem);
    }

    p {
        margin: 0;
        line-height: 1.5rem;
    }

    @media screen and (max-width: 575px) {
        padding-bottom: 0;
    }
`;

const PricingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2.5rem;
`;

const Card = styled.article`
    flex: 1 1 auto;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
    padding: 2.5rem;
    margin-bottom: 1.875rem;

    h3 {
        font-size: 1.75rem;
        font-weight: 300;
        margin-bottom: 1rem;
        margin-top: 0;
    }

    p:first-of-type {
        color: var(--hero-color);
        font-size: 2.7rem;
        margin-bottom: 0;
        margin-top: 0;
    }

    p:last-of-type {
        color: #bababa;
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    ul {
        margin-top: 0;
        margin-bottom: 1rem;
        text-align: left;
    }

    li {
        list-style: none;
        padding-bottom: 0.75rem;

        svg {
            padding-right: 4px;
            color: var(--hero-color);
            font-size: 1rem;
            vertical-align: -0.125rem;
        }
    }

    &:first-child {
        ul li:nth-child(n + 4) {
            color: #ccc;
            text-decoration: line-through;

            svg {
                color: #ccc;
            }
        }
    }

    &:nth-child(2) {
        z-index: 10;
        margin: -2rem -0.3rem 0 -0.3rem;
    }

    @media screen and (max-width: 575px) {
        &:nth-child(2) {
            z-index: 0;
            margin: 0 0 1.875rem;
        }

        ul {
            padding-left: 0;
        }
    }
`;

const Button = styled.a`
    color: #fff;
    background-color: ${({ second }) => (second ? "var(--hero-color)" : "var(--footer-main-color)")};
    border-radius: 20px;
    text-decoration: none;
    padding: 0.5rem 2rem;
    transition: all 0.4s ease;

    :hover {
        background-color: ${({ second }) => (second ? "#85b6cf" : "var(--hero-color)")};
    }
`;

const Pricing = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    <h2>Pricing</h2>
                    <p>
                        Firmament divided all day moved appear don't. Signs. To whose is years you'll days brought isn't
                        there First be sixth tree heaven created fish. Fish gathered he, darkness had life so deep days
                        above day created land yielding divided you.
                    </p>
                </Title>
                <PricingContainer>
                    <Card>
                        <h3>Free</h3>
                        <p>$0</p>
                        <p>per month</p>
                        <ul>
                            <li>
                                <BsCheck />
                                For from years forth above herb
                            </li>
                            <li>
                                <BsCheck />
                                Above midst own doesn't
                            </li>
                            <li>
                                <BsCheck />
                                Cattle life evening they're
                            </li>
                            <li>
                                <BsX /> Beginning them grass sea signs under
                            </li>
                            <li>
                                <BsX />
                                Spirit very seas fish thing second
                            </li>
                        </ul>
                        <Button href="#">Get Started</Button>
                    </Card>
                    <Card>
                        <h3>Business</h3>
                        <p>$29</p>
                        <p>per month</p>
                        <ul>
                            <li>
                                <BsCheck />
                                For from years forth above herb
                            </li>
                            <li>
                                <BsCheck />
                                Above midst own doesn't
                            </li>
                            <li>
                                <BsCheck />
                                Cattle life evening they're
                            </li>
                            <li>
                                <BsCheck />
                                beginning them grass sea signs under
                            </li>
                            <li>
                                <BsCheck />
                                Spirit very seas fish thing second
                            </li>
                        </ul>
                        <Button href="#" second={true}>
                            Get Started
                        </Button>
                    </Card>
                    <Card>
                        <h3>Developer</h3>
                        <p>$49</p>
                        <p>per month</p>
                        <ul>
                            <li>
                                <BsCheck />
                                For from years forth above herb
                            </li>
                            <li>
                                <BsCheck />
                                Above midst own doesn't
                            </li>
                            <li>
                                <BsCheck />
                                Cattle life evening they're
                            </li>
                            <li>
                                <BsCheck />
                                beginning them grass sea signs under
                            </li>
                            <li>
                                <BsCheck />
                                Spirit very seas fish thing second
                            </li>
                        </ul>
                        <Button href="#">Get Started</Button>
                    </Card>
                </PricingContainer>
            </Container>
        </Wrapper>
    );
};

export default Pricing;
