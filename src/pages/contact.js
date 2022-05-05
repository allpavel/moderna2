import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Contacts from "../components/contactPage/Contacts/Contacts";
import Layout from "../components/Layout/Layout";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import useGetPath from "../hooks/useGetPath";

const Wrapper = styled.section`
    margin-top: 3.75rem;
`;

const Contact = () => {
    const path = useGetPath();
    return (
        <Layout>
            <Wrapper>
                <Breadcrumbs path={path} />
                <Contacts />
                <ScrollToTop />
            </Wrapper>
        </Layout>
    );
};

export default Contact;
