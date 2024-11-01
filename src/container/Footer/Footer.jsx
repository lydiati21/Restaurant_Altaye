import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./Footer.css";
import "./Scroll.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      {/* <Newsletter /> */}

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">8135 Rainier Ave S, Seattle, WA 98118</p>
          <p className="p__opensans">(206) 353 5157</p>
          <p className="p__opensans">(206) 353 5157</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.fblogo} alt="footer_logo" />
          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <img
            src={images.spoon}
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <a
              href="https://web.facebook.com/altayecateringseattle?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </a>

            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Tuesday-Sunday:</p>
          <p className="p__opensans">11:00 am - 9:00 pm</p>
          {/* <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p> */}
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">&copy; 2022 Altaye. All rights reserved.</p>
      </div>

      <button className="scroll-up__button" onClick={scrollToTop}>
        <FaArrowAltCircleUp />{" "}
      </button>
    </div>
  );
};

export default Footer;
