import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Portfolio from "../components/portfolioPage/Portfolio/Portfolio";
import SEO from "../components/SEO/SEO";
import useGetPath from "../hooks/useGetPath";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const PortfolioPage = () => {
    const path = useGetPath();

    return (
        <Layout>
            <SEO title="Portfolio" description="This is The Portfolio Page" />
            <Wrapper>
                <Breadcrumbs path={path} />
                <Portfolio />
                <ScrollToTop />
            </Wrapper>
        </Layout>
    );
};

export default PortfolioPage;
