import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TeamSocialMedia, { SocialMedia } from "../SocialMedia/SocialMedia";

const query = graphql`
    {
        allStrapiTeam {
            edges {
                node {
                    Name
                    Description
                    Position
                    Photo {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Wrapper = styled.section`
    padding: 3.75rem 0;

    @media screen and (max-width: 575px) {
        padding: 3rem 0 2rem;
    }
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
    const data = useStaticQuery(query);
    const teamMembers = data.allStrapiTeam.edges;
    return (
        <Wrapper>
            <Container>
                {teamMembers.map(member => {
                    const imageItem = getImage(member.node.Photo.localFile);
                    return (
                        <Card key={uuidv4()}>
                            <CardImage>
                                <GatsbyImage image={imageItem} alt={`image of ${member.node.Name}`} />
                                <TeamSocialMedia />
                            </CardImage>
                            <Text>
                                <h2>{member.node.Name}</h2>
                                <span>{member.node.Position}</span>
                                <p>{member.node.Description}</p>
                            </Text>
                        </Card>
                    );
                })}
            </Container>
        </Wrapper>
    );
};

export default TeamCards;
