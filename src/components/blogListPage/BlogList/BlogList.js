import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsPerson, BsClock } from "react-icons/bs";
import Sidebar from "../Sidebar/Sidebar";

const query = graphql`
    {
        allStrapiBlog {
            nodes {
                title
                postAuthor
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
    }
`;

const Wrapper = styled.section`
    padding: 2.5rem 0;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    padding: 0 1rem;

    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

const BlogListItem = styled.article`
    padding: 1.875rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;

    .gatsby-image-wrapper {
        max-height: 440px;
        overflow: hidden;
        margin: -1.875rem -1.875rem 1.5rem -1.875rem;
    }

    h2 {
        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    p {
        line-height: 1.5rem;
    }
`;

const Info = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;

    li {
        list-style: none;
        margin-bottom: 1rem;

        svg {
            color: var(--main-color);
            vertical-align: -0.125em;
        }
    }

    li:first-child {
        padding-right: 2rem;
    }
`;

const Button = styled.div`
    text-align: right;
    button {
        background-color: #77adca;
        color: #fff;
        border: 0;
        padding: 0.8rem 1.8rem;
        transition: all 0.4s ease;

        :hover {
            cursor: pointer;
            background-color: var(--main-color);
        }
    }
`;

const BlogList = () => {
    const data = useStaticQuery(query);
    const posts = data.allStrapiBlog.nodes;

    return (
        <Wrapper>
            <Container>
                <div>
                    {posts.map(post => {
                        const postImage = getImage(post.images[0].localFile);
                        return (
                            <BlogListItem key={uuidv4()}>
                                <GatsbyImage image={postImage} alt="" />
                                <h2>{post.title}</h2>
                                <Info>
                                    <li>
                                        <BsPerson /> {post.postAuthor}
                                    </li>
                                    <li>
                                        <BsClock /> {post.data}
                                    </li>
                                </Info>
                                <p>{post.description}</p>
                                <Button>
                                    <button>Read More</button>
                                </Button>
                            </BlogListItem>
                        );
                    })}
                </div>
                <Sidebar />
            </Container>
        </Wrapper>
    );
};

export default BlogList;
