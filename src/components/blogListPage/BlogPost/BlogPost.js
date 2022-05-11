import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    outline: 2px solid red;

    div {
        height: 500px;
        outline: 2px solid green;
    }
`;

const BlogPost = () => {
    return (
        <Wrapper>
            <div>Blog Post 1</div>
            <div>Blog Post 2</div>
            <div>Blog Post 3</div>
        </Wrapper>
    );
};

export default BlogPost;
