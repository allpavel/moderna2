import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination, Autoplay]);

const Wrapper = styled.section`
    padding: 3.75rem 0;

    @media screen and (max-width: 575px) {
        padding: 2rem 0 2rem;
    }
`;

const Container = styled.section`
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    padding: 0 1rem;
`;

const Title = styled.div`
    text-align: center;
    padding-bottom: 1.875rem;

    h2 {
        font-size: 1.75rem;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 1.25rem;
        padding-bottom: 1.25rem;
        position: relative;
    }

    h2:before {
        content: "";
        position: absolute;
        display: block;
        width: 7.5rem;
        height: 1px;
        background-color: #ddd;
        bottom: 1px;
        left: calc(50% - 3.75rem);
    }

    h2:after {
        content: "";
        position: absolute;
        display: block;
        width: 2.5rem;
        height: 3px;
        background-color: var(--hero-color);
        bottom: 0;
        left: calc(50% - 1.25rem);
    }

    p {
        margin: 0;
        line-height: 1.5rem;
    }
`;

const TestimonialCarousel = styled.div`
    img {
        width: 120px;
        height: auto;
        border-radius: 50%;
        border: 4px solid #fff;
        margin: 0 auto;
    }
    h3 {
        margin: 10px 0 5px 0;
        color: black;
    }

    p {
        color: #999;
        margin-bottom: 15px;
    }

    p:last-child {
        color: #000;
        font-style: italic;
        margin-bottom: 2rem;
    }

    .swiper-pagination-bullets {
        bottom: 2px;
    }

    .swiper-pagination-bullet {
        bottom: 2px;
        height: 12px;
        width: 12px;
        background-color: #fff;
        opacity: 1;
        border: 1px solid var(--hero-color);
    }

    .swiper-pagination-bullet-active {
        background-color: var(--hero-color);
    }
`;

const Testimonials = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    <h2>Testimonials</h2>
                    <p>
                        Rule years in after isn't fourth thing them likeness. Face you spirit air place fish i cattle
                        for wherein isn't them. Shall image darkness and meat make together upon him don't form may his
                        beginning fill void. Open creeping, image.
                    </p>
                </Title>
                <TestimonialCarousel>
                    <Swiper
                        slidesPerView={1}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={{ Pagination }}
                    >
                        <SwiperSlide>
                            <StaticImage src="../../../images/testimonials/testimonials-1.jpg" alt="CEO" />
                            <h3>Saul Goodman</h3>
                            <p>CEO &#38; Founder</p>
                            <p>
                                Sea also sea winged sea whales likeness them firmament. Form creeping without earth life
                                i, that hath. Dry abundantly. You'll unto there great won't it winged lesser. Form signs
                                sixth.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <StaticImage src="../../../images/testimonials/testimonials-2.jpg" alt="CEO" />
                            <h3>Sara Wilsson</h3>
                            <p>Designer</p>
                            <p>
                                Multiply every hath bring whose set is of. There living be Earth the place gathering
                                fill lesser itself tree all and whose all sea dry won't fly fly unto moved.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <StaticImage src="../../../images/testimonials/testimonials-3.jpg" alt="CEO" />
                            <h3>Jena Carlise</h3>
                            <p>Store Owner</p>
                            <p>
                                He forth thing his fifth morning fifth beast god gathered. Second. Face subdue day made.
                                The subdue years dry lights let cattle tree make, abundantly seasons Given be he place.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <StaticImage src="../../../images/testimonials/testimonials-4.jpg" alt="CEO" />
                            <h3>Mat Brandon</h3>
                            <p>Freelancer</p>
                            <p>
                                May, won't fowl male Saying heaven female day. Night seed void two green without third
                                was. After moveth one creepeth fly bearing were doesn't seed spirit.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <StaticImage src="../../../images/testimonials/testimonials-5.jpg" alt="CEO" />
                            <h3>John Larson</h3>
                            <p>Software Developer</p>
                            <p>
                                Gathering waters greater bring there yielding doesn't. Have one fill signs subdue Whose
                                place dominion from were of of Sixth female fourth you'll. Green.
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </TestimonialCarousel>
            </Container>
        </Wrapper>
    );
};

export default Testimonials;
