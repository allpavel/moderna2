import React from "react";
import styled from "styled-components";
import {
    FaTwitter,
    FaFacebook,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
    width: 2.25rem;
    height: 2.25rem;
    background-color: #1e4356;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    svg {
        font-size: 1rem;
    }

    :hover {
        background-color: var(--main-color);
    }
`;

const SocialLinks = () => {
    return (
        <Wrapper>
            <Icon>
                <FaTwitter />
            </Icon>
            <Icon>
                <FaFacebook />
            </Icon>
            <Icon>
                <FaInstagramSquare />
            </Icon>
            <Icon>
                <FaLinkedin />
            </Icon>
        </Wrapper>
    );
};

export default SocialLinks;
