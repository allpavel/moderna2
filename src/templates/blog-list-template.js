import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import useGetPath from "../hooks/useGetPath";
import Seo from "../components/SEO/SEO";
import BlogList from "../components/blogListPage/BlogList/BlogList";

export const listQuery = graphql`
    query BlogListQuery($skip: Int, $limit: Int) {
        allStrapiBlog(limit: $limit, sort: { fields: data, order: DESC }, skip: $skip) {
            edges {
                node {
                    id
                    title
                    postAuthor
                    data
                    slug
                    description
                    images {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    tags {
                        tags
                    }
                }
            }
            pageInfo {
                totalCount
                perPage
                pageCount
                currentPage
            }
        }
    }
`;

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const BlogPage = ({ data }) => {
    const path = useGetPath();

    return (
        <Layout>
            <Seo title="Blog" description="This is the Blog Page" />
            <Wrapper>
                <Breadcrumbs path={path} />
                <BlogList data={data} />
                <ScrollToTop />
            </Wrapper>
        </Layout>
    );
};

export default BlogPage;
