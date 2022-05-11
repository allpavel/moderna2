import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import styled from "styled-components";

const Wrapper = styled.section`
    padding: 3.75rem 0;
    height: calc(100vh - (3.75rem * 2));

    @media screen and (max-width: 575px) {
        padding: 3rem 0 2rem;
    }
`;

const Text = styled.div`
    grid-area: text;
    padding: 0 10px;

    h2 {
        color: var(--main-color);
        margin: 0;
    }

    p {
        font-size: 3rem;
        font-weight: bold;
    }
`;

const ImageItem = styled.div`
    grid-area: image;
    padding: 0 10px;
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    height: 100%;
    margin: 0 auto;
    display: grid;
    place-items: center;
    grid-template-columns: 50% 50%;
    grid-template-areas: "text image";

    @media screen and (max-width: 992px) {
        margin: 0 1rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "image"
            "text";
    }
`;

const ErrorPage = () => {
    return (
        <Layout>
            <SEO title="Error" description="This is The Error Page" />
            <Wrapper>
                <Container>
                    <Text>
                        <h2>404</h2>
                        <p>Whoops! This is not what you were looking for</p>
                        <span>
                            But you just found the sock we'd lost, thanks.
                            <br />
                            Try your luck by going back to the <Link to="/">home page</Link>.
                        </span>
                    </Text>
                    <ImageItem>
                        <StaticImage
                            src="../images/404.png"
                            placeholder="blurred"
                            width={600}
                            height={600}
                            alt="error image"
                        />
                    </ImageItem>
                </Container>
            </Wrapper>
        </Layout>
    );
};

export default ErrorPage;
