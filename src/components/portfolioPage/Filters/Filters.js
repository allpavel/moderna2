import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 575px) {
        margin: 0 1rem;
    }
`;

const FiltersListItem = styled.li`
    padding: 0 4px 6px;
    margin: 0 1rem 0.3rem;
    list-style: none;
    border-bottom: ${({ active }) => (active ? "2px solid var(--hero-color)" : "2px solid #fff")};
    color: ${({ active }) => (active ? "var(--hero-color)" : "#000")};
    transition: all 0.4s ease;

    &:hover {
        border-bottom: 2px solid var(--hero-color);
        color: var(--hero-color);
        cursor: pointer;
    }
`;

const FiltersList = styled.ul`
    display: flex;
    padding-left: 0;
    margin: 0 0 2rem;
`;

const Filters = () => {
    const [all, setAll] = useState(false);
    const [app, setApp] = useState(false);
    const [card, setCard] = useState(false);
    const [web, setWeb] = useState(false);

    const toggleAll = () => {
        setAll(prev => !prev);
        setApp(false);
        setCard(false);
        setWeb(false);
    };

    const toggleApp = () => {
        setApp(prev => !prev);
        setAll(false);
        setCard(false);
        setWeb(false);
    };

    const toggleCard = () => {
        setCard(prev => !prev);
        setApp(false);
        setAll(false);
        setWeb(false);
    };

    const toggleWeb = () => {
        setWeb(prev => !prev);
        setApp(false);
        setAll(false);
        setCard(false);
    };

    console.count("Filters");

    return (
        <Container>
            <FiltersList>
                <FiltersListItem active={all} onClick={toggleAll}>
                    All
                </FiltersListItem>
                <FiltersListItem active={app} onClick={toggleApp}>
                    App
                </FiltersListItem>
                <FiltersListItem active={card} onClick={toggleCard}>
                    Card
                </FiltersListItem>
                <FiltersListItem active={web} onClick={toggleWeb}>
                    Web
                </FiltersListItem>
            </FiltersList>
        </Container>
    );
};

export default Filters;
