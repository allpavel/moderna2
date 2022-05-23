import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Services from "../components/Services/Services";
import Layout from "../components/Layout/Layout";
import WhyUs from "../components/WhyUs/WhyUs";
import ServicesDetails from "../components/pages/servicesPage/ServicesDetails/ServicesDetails";
import Pricing from "../components/pages/servicesPage/Pricing/Pricing";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Seo from "../components/SEO/SEO";
import useGetPath from "../hooks/useGetPath";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const ServicesPage = () => {
    const path = useGetPath();

    return (
        <Layout>
            <Seo title="Services" description="This is The Services Page" />
            <Wrapper>
                <Breadcrumbs path={path} />
                <Services />
                <WhyUs />
                <ServicesDetails />
                <Pricing />
                <ScrollToTop />
            </Wrapper>
        </Layout>
    );
};

export default ServicesPage;
