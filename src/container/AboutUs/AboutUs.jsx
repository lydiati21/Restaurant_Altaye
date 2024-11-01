import React, { useState } from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [expandedHistory, setExpandedHistory] = useState(false);

  const toggleExpandAbout = () => {
    setExpandedAbout(!expandedAbout);
  };

  const toggleExpandHistory = () => {
    setExpandedHistory(!expandedHistory);
  };

  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        {/* <img src={images.knife} alt="G_overlay" /> */}
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            We are more than just a restaurant; we are a celebration of
            Ethiopian culture and cuisine. Founded with a passion for sharing
            the rich culinary heritage of Ethiopia,
            {expandedAbout && (
              <>
                <br />
                our team is dedicated to providing an authentic dining
                experience that transports you to the heart of Addis Ababa.
              </>
            )}
          </p>
          <button
            type="button"
            className="see-more-less"
            onClick={toggleExpandAbout}
          >
            {expandedAbout ? "See Less" : "See More"}
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.sabaDesign} alt="about_saba" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            From our warm hospitality to our carefully crafted dishes made with
            traditional recipes and fresh, high-quality ingredients, we strive
            to offer a taste of Ethiopia that is both delicious and memorable.
            {expandedHistory && (
              <>
                <br />
                Whether you are a seasoned fan of Ethiopian cuisine or new to
                its flavors, we welcome you to join us on a journey of discovery
                and delight.
              </>
            )}
          </p>
          <button
            type="button"
            className="see-more-less"
            onClick={toggleExpandHistory}
          >
            {expandedHistory ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
