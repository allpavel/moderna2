import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.section`
    margin: 0 auto;
    padding: 0 1rem;
`;

const PaginationList = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin: 0;

    a {
        color: #fff;
        text-decoration: none;
        background-color: #77adca;
        padding: 1rem;
        margin-right: 2rem;
        border: 3px solid transparent;
        transition: all 0.4s linear;

        :last-of-type {
            margin-right: 0;
        }

        :hover {
            background-color: var(--main-color);
        }
    }

    .active {
        border: 3px solid #77adca;
        background-color: var(--main-color);
    }
`;

const Pagination = ({ pages }) => {
    const pageNumbers = [];

    for (let i = 0; i < pages.pageCount; i++) {
        pageNumbers.push(i + 1);
    }
    return (
        <Wrapper>
            <PaginationList>
                {pageNumbers.map((number, i) => (
                    <Link to={number === 1 ? `/blog/` : `/blog/${number}/`} activeClassName="active" key={i}>
                        {number}
                    </Link>
                ))}
            </PaginationList>
        </Wrapper>
    );
};

export default Pagination;
