import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyUs from "../components/WhyUs/WhyUs";
import Features from "../components/Features/Features";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Wrapper>
                <Services />
                {/* <WhyUs />
                <Features />
                <ScrollToTop /> */}
            </Wrapper>
        </Layout>
    );
}
