import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { BsCheck2Circle } from "react-icons/bs";

const Wrapper = styled.section`
    padding: 3.75rem 0;
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`;

const Image = styled.div`
    padding: 0 10px;
`;

const Text = styled.div`
    padding: 0 10px;

    h3 {
        font-size: 1.625rem;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    p {
        line-height: 1.5rem;
    }

    p:first-of-type {
        font-style: italic;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        line-height: 1.5rem;
        padding-bottom: 1rem;

        svg {
            color: var(--hero-color);
            font-size: 1.25rem;
            padding-right: 7px;
            vertical-align: -0.2rem;
        }
    }
`;

const AboutUs = () => {
    return (
        <Wrapper>
            <Container>
                <Image>
                    <StaticImage
                        src="../../../images/about.jpg"
                        alt="out team image"
                    />
                </Image>
                <Text>
                    <h3>
                        Fill creature shall gathering under gathered open us us
                        under first she'd together.
                    </h3>
                    <p>
                        Two likeness tree together, is deep midst let. Had had
                        were in there. Let meat two his may fruitful fifth.
                    </p>
                    <ul>
                        <li>
                            <BsCheck2Circle />
                            Earth were one heaven. Can't seed called replenish
                            every female
                        </li>
                        <li>
                            <BsCheck2Circle />
                            Bearing. Good also fruitful heaven. Don't thing
                            whales given his
                        </li>
                        <li>
                            <BsCheck2Circle />
                            Him of is morning fruit. Sixth brought. I unto two.
                            Brought midst fourth is them. Make seas one above
                            seasons. Saying upon appear subdue stars. Green
                            herb. Subdue. Signs i can't You're female fowl
                            moveth.
                        </li>
                    </ul>
                    <p>
                        Multiply creepeth the from greater days moveth, in set i
                        our earth spirit fly. Under seasons. Day is a likeness
                        made seas their fly fly fowl moved. Creeping fill living
                        great is likeness be creepeth morning Man form good over
                        there fruitful stars whose earth second place abundantly
                        together beast divide. Kind in day open i him upon deep
                        won't.
                    </p>
                </Text>
            </Container>
        </Wrapper>
    );
};

export default AboutUs;
