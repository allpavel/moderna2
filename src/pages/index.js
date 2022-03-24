import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyUs from "../components/WhyUs/WhyUs";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Services />
            <WhyUs />
        </Layout>
    );
}
