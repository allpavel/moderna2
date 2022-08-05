import React, { useState } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Filters from "../Filters/Filters";
import Items from "../Items/Items";
import { useFilter } from "../../../../hooks/useFilter";

const query = graphql`
    {
        allStrapiPortfolio(sort: { order: ASC, fields: image___localFile___url }) {
            nodes {
                id
                category
                title
                image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`;

const Wrapper = styled.section`
    padding: 3.75rem 0;

    @media screen and (max-width: 575px) {
        padding: 3rem 0 2rem;
    }
`;

const Portfolio = () => {
    const data = useStaticQuery(query);
    const [filter, setFilter] = useState("all");
    const filteredData = useFilter(data.allStrapiPortfolio.nodes, filter);

    return (
        <Wrapper>
            <Filters filter={filter} setFilter={setFilter} />
            <Items data={filteredData} />
        </Wrapper>
    );
};

export default Portfolio;
