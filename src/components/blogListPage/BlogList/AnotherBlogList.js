import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const query = graphql`
    {
        allStrapiBlog(limit: 3, sort: { fields: data, order: DESC }) {
            edges {
                node {
                    title
                    postAuthor
                    data
                    slug
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

const AnotherBlogList = () => {
    const data = useStaticQuery(query);
    const posts = data.allStrapiBlog.edges;
    const pageInfo = data.allStrapiBlog.pageInfo;

    console.log(pageInfo);

    const pages = [];

    for (let i = 0; i < pageInfo.pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <div>
            {posts.map((post, index) => {
                return (
                    <div key={index}>
                        <h2>{post.node.title}</h2>
                        <p>{post.node.postAuthor}</p>
                    </div>
                );
            })}
            <hr />
            <div></div>
        </div>
    );
};

export default AnotherBlogList;
