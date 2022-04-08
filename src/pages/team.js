import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import TeamCards from "../components/teamPage/TeamCards/TeamCards";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const Team = () => {
    return (
        <Layout>
            <Wrapper>
                <Breadcrumbs page="Our Team" />
                <TeamCards />
            </Wrapper>
        </Layout>
    );
};

export default Team;
