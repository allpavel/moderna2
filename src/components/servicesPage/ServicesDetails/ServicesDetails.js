import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { BsArrowRight } from "react-icons/bs";

const Wrapper = styled.section`
    padding: 3.75rem 0 0.625rem;
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Item = styled.div`
    display: flex;
    align-items: stretch;
    width: 47%;
    flex: 0 0 auto;
    padding: 0.5rem;
`;

const Text = styled.div`
    max-width: 70%;
    z-index: 2;
    margin-top: -3.75rem;
    background-color: #fff;
    padding: 2rem;
    border-top: 4px solid #fff;
    transition: all 0.3s ease;

    h2 {
        margin-top: 0;
        text-align: center;
        color: rgb(30, 67, 86);
        transition: all 0.3s ease;
    }

    p {
        line-height: 1.5rem;
    }

    a {
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            color: var(--main-color);
        }

        svg {
            vertical-align: -0.125rem;
        }
    }
`;

const Image = styled.div`
    width: 100%;
    transition: all 0.5s ease;
`;

const Card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    margin-bottom: 3.75rem;
    position: relative;

    :hover {
        ${Text} {
            border-top: 4px solid var(--main-color);

            h2 {
                color: var(--main-color);
            }
        }

        ${Image} {
            transform: scale(1.05);
        }
    }
`;

const ServicesDetails = () => {
    return (
        <Wrapper>
            <Container>
                <Item>
                    <Card>
                        <Image>
                            <StaticImage src="../../../images/service-details-1.jpg" alt="" />
                        </Image>
                        <Text>
                            <h2>Our Mission</h2>
                            <p>
                                Good, likeness years night, fourth she'd Image cattle seed lesser day days so multiply
                                earth heaven a. Saying. They're give very behold. Fruit fish winged a. Air two light.
                                Day which beginning wherein. Open one moving appear likeness great He.
                            </p>
                            <a href="#">
                                <BsArrowRight /> Read More
                            </a>
                        </Text>
                    </Card>
                </Item>
                <Item>
                    <Card>
                        <Image>
                            <StaticImage src="../../../images/service-details-2.jpg" alt="" />
                        </Image>
                        <Text>
                            <h2>Our Plan</h2>
                            <p>
                                Us there hath you isn't waters he second made void yielding sea. They're land them Under
                                whales open lights. May spirit. Void moving, years fowl two thing unto. Abundantly,
                                firmament place creepeth divide. Lesser above deep abundantly brought after midst.
                            </p>
                            <a href="#">
                                <BsArrowRight /> Read More
                            </a>
                        </Text>
                    </Card>
                </Item>
                <Item>
                    <Card>
                        <Image>
                            <StaticImage src="../../../images/service-details-3.jpg" alt="" />
                        </Image>
                        <Text>
                            <h2>Our Vision</h2>
                            <p>
                                Doesn't fifth to. Years Greater itself greater brought over which after he bearing
                                lesser face multiply isn't heaven. Man all gathering there years above have brought
                                waters that from saying very. Living our. Bring. Them, isn't seasons seas fowl without.
                            </p>
                            <a href="#">
                                <BsArrowRight /> Read More
                            </a>
                        </Text>
                    </Card>
                </Item>
                <Item>
                    <Card>
                        <Image>
                            <StaticImage src="../../../images/service-details-4.jpg" alt="" />
                        </Image>
                        <Text>
                            <h2>Our Care</h2>
                            <p>
                                Fruit so you'll after it upon bearing seed whales male brought him there. Bring female.
                                Them us gathered there meat gathering you male that unto every upon, under winged fourth
                                their. Beast years firmament Meat forth have thing lights he.
                            </p>
                            <a href="#">
                                <BsArrowRight /> Read More
                            </a>
                        </Text>
                    </Card>
                </Item>
            </Container>
        </Wrapper>
    );
};

export default ServicesDetails;
