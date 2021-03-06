import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Hero from "../components/pages/indexPage/Hero/Hero";
import Services from "../components/Services/Services";
import WhyUs from "../components/WhyUs/WhyUs";
import Features from "../components/pages/indexPage/Features/Features";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Seo from "../components/SEO/SEO";

const Wrapper = styled.main`
    margin-top: 3.75rem;

    @media screen and (max-width: 575px) {
        margin-top: 2rem;
    }
`;

export default function Home() {
    return (
        <Layout>
            <Seo title="Home" description="This is The Home Page" />
            <Hero />
            <Wrapper>
                <Services />
                <WhyUs />
                <Features />
                <ScrollToTop />
            </Wrapper>
        </Layout>
    );
}
