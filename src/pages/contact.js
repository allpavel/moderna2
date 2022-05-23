import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Contacts from "../components/pages/contactPage/Contacts/Contacts";
import Layout from "../components/Layout/Layout";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Seo from "../components/SEO/SEO";
import useGetPath from "../hooks/useGetPath";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const Contact = () => {
    const path = useGetPath();
    return (
        <Layout>
            <Seo title="Contact" description="this is a description" />
            <Wrapper>
                <Breadcrumbs path={path} />
                <Contacts />
                <ScrollToTop />
            </Wrapper>
        </Layout>
    );
};

export default Contact;
