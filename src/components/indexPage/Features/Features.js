import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { BiCheck } from "react-icons/bi";

const Wrapper = styled.section`
    background-color: #fff;
    padding: 3.75rem 0;

    @media screen and (max-width: 575px) {
        padding: 2rem;
    }
`;

const Title = styled.article`
    max-width: var(--max-width-desktop);
    text-align: center;
    margin: 0 auto;
    padding-bottom: 2rem;
    line-height: 1.5rem;

    h2 {
        font-size: 1.75rem;
        font-weight: 400;
        margin-bottom: 1.25rem;
        padding-bottom: 1.25rem;
        margin-top: 0;
        position: relative;
    }

    h2::before {
        content: "";
        display: block;
        position: absolute;
        width: 7.5rem;
        height: 1px;
        background-color: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
    }

    h2::after {
        content: "";
        position: absolute;
        display: block;
        width: 2.5rem;
        height: 3px;
        background-color: var(--hero-color);
        bottom: 0;
        left: calc(50% - 20px);
    }
`;

const Item = styled.article`
    max-width: var(--max-width-desktop);
    margin: 3rem auto 5rem;
    display: grid;
    gap: 2rem;

    .gatsby-image-wrapper {
        grid-area: image;
    }

    :nth-child(2n) {
        grid-template-columns: 40% 60%;
        grid-template-areas: "image text";

        @media screen and (max-width: 575px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
                "image"
                "text";
        }
    }

    :nth-child(2n + 1) {
        grid-template-columns: 60% 40%;
        grid-template-areas: "text image";

        @media screen and (max-width: 575px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
                "image"
                "text";
        }
    }

    div p:nth-child(2) {
        font-style: italic;
    }

    :nth-child(2) h3 {
        padding-top: 0;
    }

    div h3 {
        padding-top: 2rem;
    }

    @media screen and (max-width: 575px) {
        margin: 2rem 0 1rem;

        div h3 {
            padding-top: 0;
            margin-top: 0;
        }
    }
`;

const Text = styled.div`
    grid-area: text;
    h3 {
        font-weight: 400;
        font-size: 1.5rem;
    }

    p {
        margin-bottom: 0;
        line-height: 1.5rem;
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
            padding-right: 4px;
            vertical-align: -0.2rem;
        }
        &:last-child {
            padding-bottom: 0;
        }
    }
`;

const Features = () => {
    return (
        <Wrapper>
            <Title>
                <h2>Features</h2>
                <p>
                    Two their herb face fish. Rule the appear. Won't divide seas dominion abundantly itself air behold
                    form them days sixth them together fifth lights land creeping they're which over gathering first
                    creeping creeping. Behold had whose he created you're let.
                </p>
            </Title>
            <Item>
                <StaticImage src="../../../images/features-1.svg" alt="" layout="constrained" placeholder="tracedSVG" />
                <Text>
                    <h3>Fruitful so which set two won't multiply</h3>
                    <p>
                        Shall fill fruit place divide very, light tree in creepeth divided unto sea don't. Us gathering
                        that without he. She'd fruitful shall Of That kind. Over fourth sea Set signs gathering fish.
                        Bring his midst gathering lights above it
                    </p>
                    <ul>
                        <li>
                            <BiCheck />
                            Earth were one heaven. Can't seed called replenish every female
                        </li>
                        <li>
                            <BiCheck />
                            Bearing. Good also fruitful heaven. Don't thing whales given his
                        </li>
                    </ul>
                </Text>
            </Item>
            <Item>
                <StaticImage src="../../../images/features-2.svg" alt="" layout="constrained" placeholder="tracedSVG" />
                <Text>
                    <h3>Greater whose fifth sixth very and may life.</h3>
                    <p>
                        His light divided day us image won't she'd give it lesser every moveth created meat. Bring give.
                        It deep creepeth. Man subdue, likeness days to kind there seas fruitful female multiply, kind
                        let subdue. Air in the. All, male above
                    </p>
                    <p>
                        Seed face moveth yielding. Place. Firmament green. Made evening air and own rule lights multiply
                        evening and waters, meat. Kind be very day in years the. I place. Won't all two open spirit
                        grass created after brought don't be waters behold. Lights multiply. Bring fish heaven. Grass
                        fill for were
                    </p>
                </Text>
            </Item>
            <Item>
                <StaticImage src="../../../images/features-3.svg" alt="" layout="constrained" placeholder="tracedSVG" />
                <Text>
                    <h3>Hath moveth greater don't fifth herb don't light</h3>
                    <p>
                        Great land air fruit tree thing evening fifth replenish. The our. One his sixth abundantly have
                        give he give seed air, dry Thing Third days had green abundantly Lesser years from our dry form
                        won't every land make good
                    </p>
                    <ul>
                        <li>
                            <BiCheck />
                            In yielding deep above hath dry rule dry day don't, yielding kind cattle
                        </li>
                        <li>
                            <BiCheck />
                            Isn't bring brought, grass they're yielding male give yielding appear
                        </li>
                        <li>
                            <BiCheck />
                            Dominion whose called, sixth set also subdue let said days waters days
                        </li>
                    </ul>
                </Text>
            </Item>
            <Item>
                <StaticImage src="../../../images/features-4.svg" alt="" layout="constrained" placeholder="tracedSVG" />
                <Text>
                    <h3>Saw dominion bearing without second likeness</h3>
                    <p>
                        Shall fill fruit place divide very, light tree in creepeth divided unto sea don't. Us gathering
                        that without he. She'd fruitful shall Of That kind. Over fourth sea Set signs gathering fish.
                        Bring his midst gathering lights above it. Fly
                    </p>
                    <p>
                        Seed face moveth yielding. Place. Firmament green. Made evening air and own rule lights multiply
                        evening and waters, meat. Kind be very day in years the. I place. Won't all two open spirit
                        grass created after brought don't be waters behold. Lights multiply. Bring fish heaven. Grass
                        fill for were
                    </p>
                </Text>
            </Item>
        </Wrapper>
    );
};

export default Features;
