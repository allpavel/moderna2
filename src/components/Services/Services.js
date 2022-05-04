import React from "react";
import styled from "styled-components";
import { BsDribbble } from "react-icons/bs";
import { BiFile, BiTachometer, BiWorld } from "react-icons/bi";

const Wrapper = styled.section`
    padding: 3.75rem 0;

    @media screen and (max-width: 575px) {
        padding: 3rem 0 2rem;
    }
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    gap: 1.5rem;

    article:nth-child(1) div {
        background: #fceef3;
        color: #ff689b;
    }

    article:nth-child(2) div {
        background: #e6fdfc;
        color: #3fcdc7;
    }

    article:nth-child(3) div {
        background: #eafde7;
        color: #41cf2e;
    }

    article:nth-child(4) div {
        background: #e1eeff;
        color: #2282ff;
    }

    article:nth-child(1):hover {
        border-color: #ff689b;
    }

    article:nth-child(2):hover {
        border-color: #3fcdc7;
    }

    article:nth-child(3):hover {
        border-color: #41cf2e;
    }

    article:nth-child(4):hover {
        border-color: #2282ff;
    }
`;

const Card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 5px 26px 0 rgb(68 88 144 / 14%);
    border: 1px solid #fff;
    transition: all 0.3s ease;

    p {
        line-height: 28px;
        margin-bottom: 0;
    }

    @media screen and (max-width: 575px) {
        h2 {
            margin: 1rem 0;
        }

        p {
            margin-top: 0;
        }
    }
`;

const Icon = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 2rem;
    }
`;

const Services = () => {
    return (
        <Wrapper>
            <Container>
                <Card>
                    <Icon>
                        <BsDribbble />
                    </Icon>
                    <h2>Let hath divide</h2>
                    <p>
                        Us cattle own living abundantly. In they're spirit. Over very sea. Cattle female. The Darkness
                        fourth seas midst thing.
                    </p>
                </Card>
                <Card>
                    <Icon>
                        <BiFile />
                    </Icon>
                    <h2>Was he hath bring</h2>
                    <p>
                        That above there signs heaven which bearing. There over and grass replenish shall. Female form
                        female fish set
                    </p>
                </Card>
                <Card>
                    <Icon>
                        <BiTachometer />
                    </Icon>
                    <h2>From fly our form</h2>
                    <p>
                        Greater set shall set replenish face god likeness be morning and upon open give give were i and
                        fill subdue face
                    </p>
                </Card>
                <Card>
                    <Icon>
                        <BiWorld />
                    </Icon>
                    <h2>Made fourth without</h2>
                    <p>
                        Dry winged forth open dry third waters there, void. All. Don't man green man bring, upon them
                        you own have itself sixth
                    </p>
                </Card>
            </Container>
        </Wrapper>
    );
};

export default Services;
