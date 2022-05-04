import React from "react";
import styled from "styled-components";
import { BiFingerprint, BiGift } from "react-icons/bi";

const Wrapper = styled.section`
    background-color: var(--light-blue-color);
    padding: 3.75rem 1rem;

    @media screen and (max-width: 575px) {
        padding: 2rem 1rem;
    }
`;

const Content = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 5px 25px 0 rgba(214, 215, 216, 0.6);
    display: grid;
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 910px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
`;

const Text = styled.div`
    margin: auto 0;
    padding: 3rem;

    div:nth-child(2) {
        margin-top: 3.125rem;
    }

    div:hover div {
        background-color: var(--hero-color);
    }

    div:hover div svg {
        color: #fff;
    }

    h2 {
        font-weight: 700;
        margin-bottom: 10px;
        text-transform: uppercase;
        margin-left: 5.875rem;
    }

    p {
        margin-left: 5.875rem;
        line-height: 1.5rem;
    }

    @media screen and (max-width: 575px) {
        padding: 1rem 2rem;

        h2 {
            font-size: 1.125rem;
        }
    }
`;

const Video = styled.div`
    padding: 1rem;

    @media screen and (max-width: 575px) {
        iframe {
            height: 200px;
        }
    }
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    width: 4.5rem;
    height: 4.5rem;
    background-color: #f3f8fa;
    border-radius: 6px;
    transition: all 0.5s ease;

    svg {
        font-size: 2rem;
        color: var(--hero-color);
    }
`;

const WhyUs = () => {
    return (
        <Wrapper>
            <Content>
                <Video>
                    <iframe
                        width="100%"
                        height="439"
                        src="https://www.youtube.com/embed/iMP6QUOlRBc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Video>
                <Text>
                    <div>
                        <Icon>
                            <BiFingerprint />
                        </Icon>
                        <h2>Unto multiply stars</h2>
                        <p>
                            Feugiat lorem potenti purus elementum facilisi. Ullamcorper. Cubilia. Congue donec curabitur
                            leo per faucibus lobortis magnis laoreet cras lobortis id
                        </p>
                    </div>
                    <div>
                        <Icon>
                            <BiGift />
                        </Icon>
                        <h2>Fowl whales man</h2>
                        <p>
                            Fruit the it you their grass appear one. Said after them form isn't us. Upon blessed above
                            given isn't after
                        </p>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    );
};

export default WhyUs;
