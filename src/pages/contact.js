import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Contacts from "../components/contactPage/Contacts/Contacts";
import Layout from "../components/Layout/Layout";

const Wrapper = styled.section`
    margin-top: 3.75rem;
`;

const Contact = () => {
    return (
        <Layout>
            <Wrapper>
                <Breadcrumbs page="Contact" />
                <Contacts />
            </Wrapper>
        </Layout>
    );
};

export default Contact;
