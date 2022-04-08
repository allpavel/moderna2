import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

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
        }

        li:last-child {
            padding-left: 10px;
        }

        li:last-child::before {
            content: "/";
            padding-right: 10px;
        }

        li a {
            text-decoration: none;
            color: #4fa6d5;
        }
    }
`;

const Breadcrumbs = ({ page }) => {
    return (
        <Wrapper>
            <Container>
                <h2>{page}</h2>
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>{page}</li>
                </ol>
            </Container>
        </Wrapper>
    );
};

export default Breadcrumbs;
