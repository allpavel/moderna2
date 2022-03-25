import React from "react";
import styled from "styled-components";
import Bottom from "../Bottom/Bottom";
import Newsletter from "../Newsletter/Newsletter";

const Wrapper = styled.footer`
`;

const Footer = () => {
    return (
        <Wrapper>
            <Newsletter />
            <Bottom />
        </Wrapper>
    );
};

export default Footer;