import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import SocialLinks from "../SocialLinks/SocialLinks";

const Wrapper = styled.article`
    background-color: #fff;
    padding: 3.125rem 0;
    background-color: var(--footer-main-color);
    color: #fff;
    border-top: 2px solid #17455e;
    border-bottom: 2px solid #17455e;

    @media screen and (max-width: 575px) {
        padding: 2rem 0;
    }
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
`;

const Links = styled.div`
    h3 {
        color: var(--main-color);
    }
    li {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 10px 0;
        line-height: 1;

        svg {
            color: var(--main-color);
            font-size: 1.125rem;
            padding-right: 2px;
            margin-bottom: 2px;
        }
    }

    @media screen and (max-width: 575px) {
        h3 {
            margin-top: 0;
        }
        ul {
            padding-left: 0;
        }
    }
`;

const Contact = styled.div`
    h3 {
        color: var(--main-color);
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`;

const Info = styled.div`
    h3 {
        color: var(--main-color);
    }
`;

const FooterTop = () => {
    return (
        <Wrapper>
            <Container>
                <Links>
                    <h3>Useful Links</h3>
                    <ul>
                        <li>
                            <BiChevronRight />
                            Home
                        </li>
                        <li>
                            <BiChevronRight />
                            About us
                        </li>
                        <li>
                            <BiChevronRight />
                            Services
                        </li>
                        <li>
                            <BiChevronRight />
                            Terms of service
                        </li>
                        <li>
                            <BiChevronRight />
                            Privacy policy
                        </li>
                    </ul>
                </Links>
                <Links>
                    <h3>Our Services</h3>
                    <ul>
                        <li>
                            <BiChevronRight />
                            Web Design
                        </li>
                        <li>
                            <BiChevronRight />
                            Web Development
                        </li>
                        <li>
                            <BiChevronRight />
                            Product Management
                        </li>
                        <li>
                            <BiChevronRight />
                            Marketing
                        </li>
                        <li>
                            <BiChevronRight />
                            Graphic Design
                        </li>
                    </ul>
                </Links>
                <Contact>
                    <h3>Contact us</h3>
                    <p>
                        " A108 Adam Street "
                        <br />
                        " New York, NY 535022 "
                        <br />
                        " United States "
                        <br />
                        <br />
                        <strong>Phone:</strong>
                        <a href="tel: +155895548855"> +1 5589 55488 55</a>
                    </p>
                </Contact>
                <Info>
                    <h3>About Moderna</h3>
                    <p>
                        Wherein shall have itself deep. Two let. Herb, fowl our. Isn't waters stars cattle shall may
                        thing brought. Of you're was meat so.
                    </p>
                    <SocialLinks />
                </Info>
            </Container>
        </Wrapper>
    );
};

export default FooterTop;
