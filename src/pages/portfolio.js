import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Portfolio from "../components/portfolioPage/Portfolio/Portfolio";
import useGetPath from "../hooks/useGetPath";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const PortfolioPage = () => {
    const path = useGetPath();

    return (
        <Wrapper>
            <Layout>
                <Breadcrumbs path={path} />
                <Portfolio />
                <ScrollToTop />
            </Layout>
        </Wrapper>
    );
};

export default PortfolioPage;
