import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Portfolio from "../components/portfolioPage/Portfolio/Portfolio";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const PortfolioPage = () => {
    return (
        <Wrapper>
            <Layout>
                <Breadcrumbs page="Portfolio" />
                <Portfolio />
                <ScrollToTop />
            </Layout>
        </Wrapper>
    );
};

export default PortfolioPage;
