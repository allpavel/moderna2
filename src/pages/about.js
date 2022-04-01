import React from "react";
import styled from "styled-components";
import AboutUs from "../components/aboutPage/AboutUs/AboutUs.js";
import Breadcrumbs from "../components/aboutPage/Breadcrumbs/Breadcrumbs.js";
import Facts from "../components/aboutPage/Facts/Facts.js";
import Skills from "../components/aboutPage/Skills/Skills.js";
import Layout from "../components/Layout/Layout.js";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const About = () => {
    return (
        <Layout index={false}>
            <Wrapper>
                <Breadcrumbs />
                <AboutUs />
                <Facts />
                <Skills />
            </Wrapper>
        </Layout>
    );
};

export default About;
