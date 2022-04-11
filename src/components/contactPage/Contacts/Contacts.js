import React from "react";
import styled from "styled-components";
import ContactInfo from "../ContactForm/ContactForm";
import LocationInfo from "../LocationInfo/LocationInfo";

const Wrapper = styled.section`
    padding: 3.75rem 0;
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
    gap: 1.5rem;
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
