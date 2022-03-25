import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
    background-color: var(--footer-bottom-color);
    color: #fff;
    padding-bottom: 2rem;

    div {
        max-width: var(--max-width-desktop);
        text-align: center;
        margin: 0 auto;
    }
`;

const Copyright = styled.div`
    padding-top: 2rem;
`;

const Credits = styled.div`
    padding-top: 1rem;

    span {
        color: var(--main-color);
        cursor: pointer;
    }
`;

const Bottom = () => {
    return (
        <Wrapper>
            <div>
                <Copyright>
                    © Copyright <strong>Pavel Alloyarov</strong>. All Rights
                    Reserved
                </Copyright>
                <Credits>
                    Designed by <span>Pavel Alloyarov</span>
                </Credits>
            </div>
        </Wrapper>
    );
};

export default Bottom;
