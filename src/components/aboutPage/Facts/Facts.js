import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    padding: 3.75rem 0;
    background-color: var(--light-blue-color);
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const Item = styled.div`
    flex: 0 1 auto;
    width: 25%;
    text-align: center;

    span {
        display: block;
        font-size: 3rem;
        color: var(--hero-color);
    }

    @media screen and (max-width: 900px) {
        width: 50%;
    }
`;

const Facts = () => {
    return (
        <Wrapper>
            <Container>
                <Item>
                    <span>232</span>
                    <p>Clients</p>
                </Item>
                <Item>
                    <span>521</span>
                    <p>Projects</p>
                </Item>
                <Item>
                    <span>1 463</span>
                    <p>Hours Of Support</p>
                </Item>
                <Item>
                    <span>15</span>
                    <p>Hard Workers</p>
                </Item>
            </Container>
        </Wrapper>
    );
};

export default Facts;
