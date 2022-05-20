import React from "react";
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
    flex-wrap: wrap;
    padding-left: 0;
    margin: 0 0 2rem;
`;

const Filters = ({ filter, setFilter }) => {
    const toggleAll = () => {
        setFilter("all");
    };

    const toggleHome = () => {
        setFilter("home");
    };

    const toggleCosmetics = () => {
        setFilter("cosmetics");
    };

    const toggleWeb = () => {
        setFilter("web");
    };

    const toggleFood = () => {
        setFilter("food");
    };

    return (
        <Container>
            <FiltersList>
                <FiltersListItem active={filter === "all"} onClick={toggleAll}>
                    All
                </FiltersListItem>
                <FiltersListItem active={filter === "home"} onClick={toggleHome}>
                    Home
                </FiltersListItem>
                <FiltersListItem active={filter === "cosmetics"} onClick={toggleCosmetics}>
                    Cosmetics
                </FiltersListItem>
                <FiltersListItem active={filter === "web"} onClick={toggleWeb}>
                    Web
                </FiltersListItem>
                <FiltersListItem active={filter === "food"} onClick={toggleFood}>
                    Food
                </FiltersListItem>
            </FiltersList>
        </Container>
    );
};

export default Filters;
