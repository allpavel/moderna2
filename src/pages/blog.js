import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
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
                <h1>Blog page</h1>
                <ScrollToTop />
            </Layout>
        </Wrapper>
    );
};

export default PortfolioPage;
