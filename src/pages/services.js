import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Services from "../components/Services/Services";
import Layout from "../components/Layout/Layout";
import WhyUs from "../components/WhyUs/WhyUs";
import ServicesDetails from "../components/servicesPage/ServicesDetails/ServicesDetails";
import Pricing from "../components/servicesPage/Pricing/Pricing";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const ServicesPage = () => {
    return (
        <Layout>
            <Wrapper>
                <Breadcrumbs />
                <Services />
                <WhyUs />
                <ServicesDetails />
                <Pricing />
            </Wrapper>
        </Layout>
    );
};

export default ServicesPage;
