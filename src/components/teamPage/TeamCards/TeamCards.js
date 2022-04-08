import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import TeamSocialMedia, { SocialMedia } from "../SocialMedia/SocialMedia";

const Wrapper = styled.section`
    padding: 3.75rem 0;
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
`;

const Card = styled.article`
    padding: 0 0.75rem;
    margin-bottom: 1.25rem;

    :hover {
        ${SocialMedia} {
            bottom: 0;
            opacity: 1;
        }
    }
`;

const Text = styled.div`
    h2 {
        font-size: 1.125rem;
        font-weight: 700;
        margin: 1rem 0 0.3rem 0;
    }

    span {
        font-size: 0.875rem;
        text-transform: uppercase;
        color: var(--hero-color);
        margin-bottom: 1rem;
    }

    p {
        font-style: italic;
        font-size: 0.875rem;
        color: #666;
        line-height: 1.625rem;
    }
`;

const CardImage = styled.div`
    position: relative;
    overflow: hidden;
`;

const TeamCards = () => {
    return (
        <Wrapper>
            <Container>
                <Card>
                    <CardImage>
                        <StaticImage src="../../../images/team/team-1.jpg" alt="team-1" />
                        <TeamSocialMedia />
                    </CardImage>
                    <Text>
                        <h2>Walter White</h2>
                        <span>Chief Executive Officer</span>
                        <p>
                            Given divide moved image there make. Own them land. Face. Lesser bearing male creature
                            Fruitful very. Days first great over dominion said creature Night third. Called for given
                            forth very years one there void him. Over winged to, after after yielding him she'd sixth
                            lesser for make appear bring herb.
                        </p>
                    </Text>
                </Card>
                <Card>
                    <CardImage>
                        <StaticImage src="../../../images/team/team-2.jpg" alt="team-2" />
                        <TeamSocialMedia />
                    </CardImage>
                    <Text>
                        <h2>Sarah Johnson</h2>
                        <span>Product Manager</span>
                        <p>
                            Itself together without heaven abundantly, earth is winged creeping creepeth. Doesn't second
                            was thing in male greater appear female i. Fill over divided. Doesn't beginning You're
                            yielding darkness moved bearing their fruit also cattle a second fruit god own, made heaven
                            divide moveth image stars it fourth, made. So darkness.
                        </p>
                    </Text>
                </Card>
                <Card>
                    <CardImage>
                        <StaticImage src="../../../images/team/team-3.jpg" alt="team-3" />
                        <TeamSocialMedia />
                    </CardImage>
                    <Text>
                        <h2>William Anderson</h2>
                        <span>CTO</span>
                        <p>
                            Without fourth upon was together him winged thing divide behold which night, the thing.
                            Divided whose firmament kind, rule herb living firmament good fish forth beast for made.
                            Moveth set. Appear great. Creature under. Made beast heaven stars meat can't. Day A kind
                            brought third open. Rule creeping yielding air.
                        </p>
                    </Text>
                </Card>
                <Card>
                    <CardImage>
                        <StaticImage src="../../../images/team/team-4.jpg" alt="team-4" />
                        <TeamSocialMedia />
                    </CardImage>
                    <Text>
                        <h2>Amanda Jepson</h2>
                        <span>Accountant</span>
                        <p>
                            Moved sea lights. Which, of thing and, dominion very. Dry third also said kind, make in hath
                            bearing. One greater Night divided saying they're life dry beginning make without kind
                            fourth be. Open it living bearing to darkness. All third saying and over whales gathering
                            likeness seas man open, fowl.
                        </p>
                    </Text>
                </Card>
            </Container>
        </Wrapper>
    );
};

export default TeamCards;
