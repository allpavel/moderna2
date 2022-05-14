import React from "react";
import styled from "styled-components";
import ContactInfo from "../ContactForm/ContactForm";
import LocationInfo from "../LocationInfo/LocationInfo";

const Wrapper = styled.section`
    padding: 3.75rem 0;

    @media screen and (max-width: 575px) {
        padding: 1rem 0 1rem;
    }
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

const Contacts = () => {
    return (
        <Wrapper>
            <Container>
                <LocationInfo />
                <ContactInfo />
            </Container>
        </Wrapper>
    );
};

export default Contacts;
