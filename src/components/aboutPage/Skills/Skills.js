import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    padding: 3.75rem 0;

    @media screen and (max-width: 575px) {
        padding: 3rem 0 2rem;
    }
`;

const Container = styled.section`
    max-width: var(--max-width-desktop);
    margin: 0 auto;

    @media screen and (max-width: 575px) {
        margin: 0 1rem;
    }
`;

const Title = styled.div`
    text-align: center;
    padding-bottom: 1.875rem;

    h2 {
        font-size: 1.75rem;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 1.25rem;
        padding-bottom: 1.25rem;
        position: relative;
    }

    h2:before {
        content: "";
        position: absolute;
        display: block;
        width: 7.5rem;
        height: 1px;
        background-color: #ddd;
        bottom: 1px;
        left: calc(50% - 3.75rem);
    }

    h2:after {
        content: "";
        position: absolute;
        display: block;
        width: 2.5rem;
        height: 3px;
        background-color: var(--hero-color);
        bottom: 0;
        left: calc(50% - 1.25rem);
    }

    p {
        margin: 0;
        line-height: 1.5rem;
    }
`;

const Content = styled.div`
    margin-bottom: 10px;
    width: 100%;
    color: #fff;
    text-transform: uppercase;

    div:nth-child(1) div {
        background-color: rgb(25, 135, 84);
        width: 100%;
    }

    div:nth-child(2) div {
        background-color: rgb(13, 202, 240);
        width: 90%;
    }

    div:nth-child(3) div {
        background-color: rgb(237, 189, 43);
        width: 75%;
    }

    div:nth-child(4) div {
        background-color: rgb(220, 53, 69);
        width: 55%;
    }
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 2.25rem;
    display: flex;
    background-color: #e9ecef;
    border-radius: 0.25rem;
    margin-bottom: 10px;

    div {
        height: 100%;
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    span {
        margin-left: 1.25rem;
    }

    i {
        float: right;
        margin-right: 1.25rem;
    }

    @media screen and (max-width: 575px) {
        span {
            font-size: 0.8rem;
        }
    }
`;

const Skills = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    <h2>Our Skills</h2>
                    <p>
                        Given said dry. Sea. Of which their two set he, seas cattle him seas female bring good set after
                        divided yielding one. Sixth be you're night likeness. Gathered cattle tree subdue blessed male
                        seed. Won't doesn't cattle was is midst.
                    </p>
                </Title>
                <Content>
                    <ProgressBar>
                        <div>
                            <span>
                                HTML <i>100%</i>
                            </span>
                        </div>
                    </ProgressBar>
                    <ProgressBar>
                        <div>
                            <span>
                                CSS <i>90%</i>
                            </span>
                        </div>
                    </ProgressBar>
                    <ProgressBar>
                        <div>
                            <span>
                                Javascript <i>75%</i>
                            </span>
                        </div>
                    </ProgressBar>
                    <ProgressBar>
                        <div>
                            <span>
                                Photoshop <i>55%</i>
                            </span>
                        </div>
                    </ProgressBar>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Skills;
