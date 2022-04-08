import React from "react";
import styled from "styled-components";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(30, 67, 86, 0.8);
    position: absolute;
    height: 2.5rem;
    bottom: -2.5rem;
    opacity: 0;
    left: 0;
    right: 0;
    transition: bottom 0.4s ease-in-out;

    svg {
        font-size: 1.125rem;
        margin: 0 1rem;
        color: #fff;
        transition: all 0.4s ease;
        cursor: pointer;

        :hover {
            color: var(--hero-color);
        }
    }
`;

const TeamSocialMedia = () => {
    return (
        <SocialMedia>
            <BsTwitter />
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
        </SocialMedia>
    );
};

export default TeamSocialMedia;
