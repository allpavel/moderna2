import React from "react";
import Bottom from "../Bottom/Bottom";
import FooterTop from "../FooterTop/FooterTop";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
    return (
        <footer>
            <Newsletter />
            <FooterTop />
            <Bottom />
        </footer>
    );
};

export default Footer;
