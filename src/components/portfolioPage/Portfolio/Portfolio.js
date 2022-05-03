import React from "react";
import styled from "styled-components";
import Filters from "../Filters/Filters";
import Items from "../Items/Items";

const Wrapper = styled.section`
    padding: 3.75rem 0;

    @media screen and (max-width: 575px) {
        padding: 3rem 0 2rem;
    }
`;

const Portfolio = () => {
    console.count("Portfolio");
    return (
        <Wrapper>
            <Filters />
            <Items />
        </Wrapper>
    );
};

export default Portfolio;
