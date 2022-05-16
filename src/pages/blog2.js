import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import useGetPath from "../hooks/useGetPath";
import SEO from "../components/SEO/SEO";
import BlogList from "../components/blogListPage/BlogList/BlogList";
import AnotherBlogList from "../components/blogListPage/BlogList/AnotherBlogList";

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const BlogPage = () => {
    const path = useGetPath();

    return (
        <Layout>
            <SEO title="Blog" description="This is the Blog Page" />
            <Wrapper>
                <Breadcrumbs path={path} />
                <AnotherBlogList />
                <BlogList />
                <ScrollToTop />
            </Wrapper>
        </Layout>
    );
};

export default BlogPage;
