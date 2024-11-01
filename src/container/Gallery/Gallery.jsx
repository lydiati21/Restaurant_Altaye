import React, { useState } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";

const imageDetails = [
  { src: images.gallery02, name: "Doro Wote" },
  { src: images.sambusa, name: "Sambusa" },
  { src: images.gallery03, name: "Kurt" },
  { src: images.gallery04, name: "Porage" },
];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [expandedText, setExpandedText] = useState(false);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const toggleTextExpansion = () => {
    setExpandedText(!expandedText);
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Discover the Heart of Ethiopia" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{
            color: "#AAAAAA",
            marginTop: "2rem",
            maxHeight: expandedText ? "none" : "9em",
            overflow: "hidden",
          }}
        >
          Welcome to our gallery, where each photo tells the story of our
          vibrant Ethiopian cuisine and culture. From our authentic dishes
          crafted with rich, traditional spices to the warm ambiance of our
          restaurant, we invite you to explore the beauty and flavors that make
          every meal an unforgettable experience. Whether you're savoring injera
          or enjoying our fresh coffee, take a moment to immerse yourself in the
          essence of Ethiopia. Enjoy the journey through our culinary heritage!
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={toggleTextExpansion}
        >
          {expandedText ? "See Less" : "See More"}
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imageDetails.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
              onMouseEnter={() => setHoveredImage(image.name)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={image.src} alt={`gallery_image_${index + 1}`} />
              <BsInstagram className="gallery__image-icon" />
              {hoveredImage === image.name && (
                <div className="image-name-overlay">{image.name}</div>
              )}
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
