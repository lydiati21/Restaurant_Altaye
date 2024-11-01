import React, { useState } from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";
import "./New.css";

const Header = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">Taste Ethiopia</h1>
        <p className="p__opensans">
          Welcome to Altaye Restaurant, where we bring the vibrant flavors and
          rich traditions of Ethiopia to your plate. Dive into a culinary
          journey filled with aromatic spices, hearty stews, and injera.
          {expanded || (
            <>
              Our menu showcases the best of Ethiopian cuisine, prepared with
              care and authenticity to offer you a truly memorable dining
              experience.
              <button className="see-more-less" onClick={toggleExpand}>
                See Less
              </button>
            </>
          )}
        </p>
        {expanded && (
          <>
            Our menu showcases the best of Ethiopian cuisine, prepared with care
            and authenticity to offer you a truly memorable dining experience.
            <button className="see-more-less" onClick={toggleExpand}>
              See More
            </button>
          </>
        )}
      </div>
      <div className="app__wrapper_img">
        <img src={images.combo1} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
