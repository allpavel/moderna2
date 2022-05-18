import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsPerson, BsClock } from "react-icons/bs";
import { Info } from "../../components/blogListPage/BlogList/BlogList";
import { Tags } from "../../components/blogListPage/Sidebar/Sidebar";
import SEO from "../../components/SEO/SEO";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/blogListPage/Sidebar/Sidebar";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useGetPath from "../../hooks/useGetPath";

export const query = graphql`
    query getSingleBlog($slug: String) {
        strapiBlog(slug: { eq: $slug }) {
            title
            data
            postAuthor
            images {
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            tags {
                post
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
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin-bottom: 2.5rem;

    h2 {
        margin-top: 0;
    }

    .gatsby-image-wrapper {
        max-height: 440px;
        overflow: hidden;
        margin: -1rem -1rem 1rem;
    }

    p:nth-of-type(3) {
        margin-bottom: 2rem;
    }
`;

const BlogPost = ({
    data: {
        strapiBlog: {
            title: itemTitle,
            data,
            postAuthor,
            images: [{ localFile: localFile1 }, { localFile: localFile2 }],
            tags: { post, tags },
        },
    },
}) => {
    const path = useGetPath();
    const postImage1 = getImage(localFile1);
    const postImage2 = getImage(localFile2);

    return (
        <Layout>
            <SEO title="" description="This is a Blog Post Page" />
            <Wrapper>
                <Breadcrumbs path={path} />
                <Container>
                    <Post>
                        <GatsbyImage image={postImage1} alt="" />
                        <h2>{itemTitle}</h2>
                        <Info>
                            <li>
                                <BsPerson /> {postAuthor}
                            </li>
                            <li>
                                <BsClock /> {data}
                            </li>
                        </Info>
                        <p>{post[0]}</p>
                        <p>{post[1]}</p>
                        <p>{post[2]}</p>
                        <GatsbyImage image={postImage2} alt="" />
                        <p>{post[3]}</p>
                        <p>{post[4]}</p>
                        <Tags>
                            <ul>
                                {tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </Tags>
                    </Post>
                    <Sidebar />
                </Container>
            </Wrapper>
        </Layout>
    );
};

export default BlogPost;
