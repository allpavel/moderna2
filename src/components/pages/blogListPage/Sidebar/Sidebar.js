import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.section`
    margin-left: 2rem;

    @media screen and (max-width: 992px) {
        margin-left: 0;
    }
`;

const Container = styled.div`
    right: 0;
    top: 5rem;
    position: sticky;
    padding: 1rem 2rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

    h2 {
        margin-top: 0;
        margin-bottom: 1rem;
    }
`;

const SearchBar = styled.div`
    margin-bottom: 2rem;

    form {
        width: 100%;
        position: relative;
        background-color: #fff;
    }

    input {
        width: calc(100% - 3.5rem);
        line-height: 2rem;
        border: 2px solid #ccc;
        border-radius: 5px;
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        font-size: 1rem;
        padding: 0 1rem;
        margin: -1px;
        background-color: var(--hero-color);
        color: #fff;
        border: 0;
        border-radius: 5px;
        transition: all 0.4s ease;

        :hover {
            cursor: pointer;
            background-color: #77adca;
        }
    }
`;

const Categories = styled.div`
    margin-bottom: 2rem;

    ul {
        padding-left: 0;
    }

    li {
        padding-top: 0.5rem;
        list-style: none;

        span {
            color: #aaaaaa;
        }
    }

    li:first-child {
        padding-top: 0;
    }
`;

const RecentPosts = styled.div`
    display: flex;
    flex-direction: column;
`;

const Post = styled.div`
    margin-bottom: 2rem;

    h3 {
        font-size: 0.8rem;
        font-weight: bold;
        margin-left: 90px;
        margin-top: 0;
    }

    time {
        font-size: 0.8rem;
        margin-left: 0.6rem;
        color: #aaaaaa;
    }

    div {
        height: 60px;
        float: left;
    }
`;

export const Tags = styled.div`
    ul {
        padding-left: 0;
        margin-bottom: 0;
    }

    li {
        list-style: none;
        display: inline-block;
        padding: 0.4rem 1rem;
        margin-bottom: 0.5rem;
        margin-right: 0.4rem;
        border: 1px solid var(--main-color);
        transition: all 0.3s linear;

        :hover {
            cursor: pointer;
            background-color: var(--main-color);
            color: #fff;
        }
    }
`;

const Sidebar = () => {
    return (
        <Wrapper>
            <Container>
                <h2>Search</h2>
                <SearchBar>
                    <form>
                        <input type="text" id="search" aria-label="Search" />
                        <button aria-label="Search Button">
                            <BsSearch />
                        </button>
                    </form>
                </SearchBar>
                <h2>Categories</h2>
                <Categories>
                    <ul>
                        <li>
                            General <span>(22)</span>
                        </li>
                        <li>
                            Lifestyle <span>(12)</span>
                        </li>
                        <li>
                            Travel <span>(16)</span>
                        </li>
                        <li>
                            Design <span>(4)</span>
                        </li>
                        <li>
                            Creative <span>(9)</span>
                        </li>
                        <li>
                            Education <span>(10)</span>
                        </li>
                    </ul>
                </Categories>
                <h2>Recent Posts</h2>
                <RecentPosts>
                    <Post>
                        <div>
                            <StaticImage src="../../../../images/blog/blog-recent-1.jpg" alt="" />
                        </div>
                        <h3>Nihil blanditiis at in nihil autem</h3>
                        <time dateTime="2020-01-10">Jan 10, 2020</time>
                    </Post>
                    <Post>
                        <div>
                            <StaticImage src="../../../../images/blog/blog-recent-2.jpg" alt="" />
                        </div>
                        <h3>Nihil blanditiis at in nihil autem</h3>
                        <time dateTime="2020-01-10">Jan 10, 2020</time>
                    </Post>
                    <Post>
                        <div>
                            <StaticImage src="../../../../images/blog/blog-recent-3.jpg" alt="" />
                        </div>
                        <h3>Nihil blanditiis at in nihil autem</h3>
                        <time dateTime="2020-01-10">Jan 10, 2020</time>
                    </Post>
                </RecentPosts>
                <h2>Tags</h2>
                <Tags>
                    <ul>
                        <li>App</li>
                        <li>IT</li>
                        <li>Studio</li>
                        <li>Office</li>
                        <li>Crative</li>
                    </ul>
                </Tags>
            </Container>
        </Wrapper>
    );
};

export default Sidebar;
