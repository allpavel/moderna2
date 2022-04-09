import React from "react";
import styled from "styled-components";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";

const LocationInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
`;

const InfoBox = styled.article`
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
    padding: 1.25rem 0 2rem 0;

    :first-child {
        grid-column: 1 / 3;
        margin-bottom: 2rem;
    }

    :nth-child(2) {
        margin-right: 1.5rem;
    }

    h2 {
        color: #666;
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0.625rem 0;
    }

    p {
        margin: 0;
        line-height: 1.5rem;
    }
`;

const Icon = styled.div`
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 2px dotted var(--main-color);
    border-radius: 50%;
    padding: 0.6rem;

    svg {
        font-size: 2rem;
        color: var(--hero-color);
    }
`;

const Location = () => {
    return (
        <LocationInfo>
            <InfoBox>
                <Icon>
                    <BiMap />
                </Icon>
                <h2>Our Address</h2>
                <p>A108 Adam Street, New York, NY 535022</p>
            </InfoBox>
            <InfoBox>
                <Icon>
                    <BsEnvelope />
                </Icon>
                <h2>Email Us</h2>
                <p>
                    info@example.com
                    <br />
                    contact@example.com
                </p>
            </InfoBox>
            <InfoBox>
                <Icon>
                    <BiPhoneCall />
                </Icon>
                <h2>Call Us</h2>
                <p>
                    +1 5589 55488 55
                    <br />
                    +1 6678 254445 41
                </p>
            </InfoBox>
        </LocationInfo>
    );
};

export default Location;
