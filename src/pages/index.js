import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Services />
            <div>Hello world!</div>
        </Layout>
    );
}
