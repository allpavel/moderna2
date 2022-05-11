import React from "react";
import styled from "styled-components";
import BlogPost from "../BlogPost/BlogPost";
import Sidebar from "../Sidebar/Sidebar";

const Wrapper = styled.section`
    padding: 2.5rem 0;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    padding: 0 1rem;
`;

const BlogList = () => {
    return (
        <Wrapper>
            <Container>
                <BlogPost />
                <Sidebar />
            </Container>
        </Wrapper>
    );
};

export default BlogList;
