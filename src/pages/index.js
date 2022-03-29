import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyUs from "../components/WhyUs/WhyUs";
import Features from "../components/Features/Features";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Services />
            <WhyUs />
            <Features />
            <ScrollToTop />
        </Layout>
    );
}
