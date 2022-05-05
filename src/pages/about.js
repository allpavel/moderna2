import React from "react";
import styled from "styled-components";
import AboutUs from "../components/aboutPage/AboutUs/AboutUs.js";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs.js";
import Facts from "../components/aboutPage/Facts/Facts.js";
import Skills from "../components/aboutPage/Skills/Skills.js";
import Testimonials from "../components/aboutPage/Testimonials/Testimonials.js";
import Layout from "../components/Layout/Layout.js";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.js";
import useGetPath from "../hooks/useGetPath.js";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const About = () => {
    const path = useGetPath();
    return (
        <Layout>
            <Wrapper>
                <Breadcrumbs path={path} />
                <AboutUs />
                <Facts />
                <Skills />
                <Testimonials />
                <ScrollToTop />
            </Wrapper>
        </Layout>
    );
};

export default About;
