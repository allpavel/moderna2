import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Link } from "gatsby";

const Wrapper = styled.section`
    padding: 1rem 0;
    background-color: var(--light-blue-color);
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 1rem;

    h2 {
        margin: 0;
        font-size: 1.75rem;
        font-weight: 300;
    }

    ol {
        display: flex;
        margin: 0;
        list-style: none;

        li {
            letter-spacing: 1px;
            padding-left: 10px;
        }

        li::before {
            content: "/";
            padding-right: 10px;
        }

        li:first-child {
            padding-left: 0;
        }

        li:first-child::before {
            content: "";
            padding-right: 0;
        }

        li a {
            text-decoration: none;
            color: #4fa6d5;
        }
    }

    @media screen and (max-width: 575px) {
        flex-direction: column;
        align-items: initial;

        h2 {
            font-size: 1.5rem;
        }

        ol {
            padding-left: 0;
        }
    }
`;

const Breadcrumbs = ({ path }) => {
    if (path.length === 1 || Number.isInteger(+path[path.length - 1])) {
        return (
            <Wrapper>
                <Container>
                    <h2>{path[0]}</h2>
                    <ol>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>{path[0]}</li>
                    </ol>
                </Container>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Container>
                <h2>{path[0]}</h2>
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {path.slice(0, path.length - 1).map(link => (
                        <li key={uuidv4()}>
                            <Link to={`/${link.toLowerCase()}/`}>{link}</Link>
                        </li>
                    ))}
                    <li>{path[path.length - 1]}</li>
                </ol>
            </Container>
        </Wrapper>
    );
};

export default Breadcrumbs;
