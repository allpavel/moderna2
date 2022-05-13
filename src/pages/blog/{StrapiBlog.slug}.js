import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import SEO from "../../components/SEO/SEO";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/blogListPage/Sidebar/Sidebar";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useGetPath from "../../hooks/useGetPath";

export const query = graphql`
    query getSingleBlog($slug: String) {
        strapiBlog(slug: { eq: $slug }) {
            title
            description
            data
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
`;

const Wrapper = styled.main`
    margin-top: 3.75rem;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    padding: 2.5rem 1rem;

    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

const Post = styled.article`
    h2 {
        margin-top: 0;
    }
`;

const BlogPost = ({
    data: {
        strapiBlog: {
            title: itemTitle,
            description: itemDescription,
            data,
            images: { localFile },
            tags: { tags },
        },
    },
}) => {
    const path = useGetPath();

    return (
        <Layout>
            <SEO title="" description="This is a Blog Post Page" />
            <Wrapper>
                <Breadcrumbs path={path} />
                <Container>
                    <Post>
                        <h2>{itemTitle}</h2>
                        <p>{itemDescription}</p>
                    </Post>
                    <Sidebar />
                </Container>
            </Wrapper>
        </Layout>
    );
};

export default BlogPost;
