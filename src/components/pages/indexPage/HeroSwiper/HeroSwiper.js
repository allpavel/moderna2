import React from "react";
import { Link } from "gatsby";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper-bundle.css";
import "./HeroSwiper.css";

SwiperCore.use([Navigation, Autoplay]);

const HeroSwiper = () => {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={true}
            modules={{ Navigation }}
        >
            <SwiperSlide>
                <h2>Welcome to Moderna</h2>
                <p>
                    Deep subdue herb behold forth wherein two made first one. Day deep. Fruitful unto in fly. You'll. I
                    their. Hath i without days is. Creature winged likeness creature also spirit.Tree firmament let
                    seasons us night she'd may image gathered over great life male And. Dry great them yielding the
                </p>
                <Link to="/">Read More</Link>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Shall said image</h2>
                <p>
                    Female had thing image set whose very Isn't good which for creeping. Form fowl good made. Divided
                    multiply wherein night midst she'd itself morning our good kind. Called behold multiply deep
                    abundantly creature grass given, land gathered fruit fifth
                </p>
                <Link to="/">Read More</Link>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Earth him fly green</h2>
                <p>
                    Brought sea years void, forth likeness midst fowl the may hath great. Kind subdue you'll face all.
                    Saw you female Fifth may set him very saying. God is under and, set made over he given all waters
                    first face given
                </p>
                <Link to="/">Read More</Link>
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSwiper;
