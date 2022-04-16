import React from "react";
import styled from "styled-components";
import ContactInfo from "../ContactForm/ContactForm";
import LocationInfo from "../LocationInfo/LocationInfo";

const Wrapper = styled.section`
    padding: 3.75rem 0;

    @media screen and (max-width: 575px) {
        padding: 3rem 0 2rem;
    }
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem;

    @media screen and (max-width: 575px) {
        margin: 0 1rem;
        gap: 0;
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
