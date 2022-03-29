import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
    background-color: #fff;
    padding: 3.125rem 0;
    background-color: var(--footer-main-color);
    color: #fff;
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
`;

const Text = styled.div`
    margin-top: 0;

    h2 {
        color: var(--main-color);
    }
`;

const SubcribeForm = styled.div`
    form {
        position: relative;
        margin-top: 2rem;
        padding: 6px 10px;
        background-color: #fff;
        border-radius: 50px;

        input[type="email"] {
            font-size: 1rem;
            height: 2rem;
            border: 0;
            width: calc(100% - 120px);
        }

        input[type="submit"] {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            border: 0;
            border-radius: 50px;
            padding: 0 1.25rem;
            margin: 3px;
            background-color: var(--hero-color);
            font-size: 1rem;
            color: #fff;
            transition: all .3s ease;
            cursor: pointer;

            :hover {
                background-color: #468db3;
            }
        }
    }
`;

const Newsletter = () => {
    return (
        <Wrapper>
            <Container>
                <Text>
                    <h2>Our Newsletter</h2>
                    <p>
                        Tamen quem nulla quae legam multos aute sint culpa legam
                        noster magna
                    </p>
                </Text>
                <SubcribeForm>
                    <form>
                        <input type="email" name="email" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </SubcribeForm>
            </Container>
        </Wrapper>
    );
};

export default Newsletter;
