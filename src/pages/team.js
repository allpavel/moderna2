import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import TeamCards from "../components/teamPage/TeamCards/TeamCards";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Seo from "../components/SEO/SEO";
import useGetPath from "../hooks/useGetPath";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const Team = () => {
    const path = useGetPath();

    return (
        <Layout>
            <Seo title="Team" description="This is The Team Page" />
            <Wrapper>
                <Breadcrumbs path={path} />
                <TeamCards />
                <ScrollToTop />
            </Wrapper>
        </Layout>
    );
};

export default Team;
