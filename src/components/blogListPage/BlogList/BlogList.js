import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsPerson, BsClock } from "react-icons/bs";
import Sidebar from "../Sidebar/Sidebar";

const Wrapper = styled.section`
    padding: 2.5rem 0;

    @media screen and (max-width: 575px) {
        padding: 1rem 0 1rem;
    }
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

export const Info = styled.ul`
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
    margin-top: 2rem;
    a {
        background-color: #77adca;
        color: #fff;
        padding: 0.8rem 1.8rem;
        transition: all 0.4s ease;
        text-decoration: none;

        :hover {
            cursor: pointer;
            background-color: var(--main-color);
        }
    }
`;

const BlogList = ({ data }) => {
    const posts = data.allStrapiBlog.edges;

    console.log(posts);

    return (
        <Wrapper>
            <Container>
                <div>
                    {posts.map(post => {
                        const postImage = getImage(post.node.images[0].localFile);
                        return (
                            <BlogListItem key={post.node.id}>
                                <GatsbyImage image={postImage} alt="" />
                                <h2>{post.node.title}</h2>
                                <Info>
                                    <li>
                                        <BsPerson /> {post.node.postAuthor}
                                    </li>
                                    <li>
                                        <BsClock /> {post.node.data}
                                    </li>
                                </Info>
                                <p>{post.node.description}</p>
                                <Button>
                                    <Link to={`/blog/${post.node.slug}`}>Read More</Link>
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
