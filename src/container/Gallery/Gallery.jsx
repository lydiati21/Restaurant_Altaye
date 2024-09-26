import React, { useState } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";

// const galleryImages = [images.shiro, images.doro, images.kurt, images.genfo];

// const Gallery = () => {
//   const scrollRef = React.useRef(null);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (direction === "left") {
//       current.scrollLeft -= 300;
//     } else {
//       current.scrollLeft += 300;
//     }
//   };

//   return (
//     <div className="app__gallery flex__center">
//       <div className="app__gallery-content">
//         <SubHeading title="Instagram" />
//         <h1 className="headtext__cormorant">Photo Gallery</h1>
//         <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
//           lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
//           fsjhn so the no apply lorem go epsum
//         </p>
//         <button type="button" className="custom__button">
//           View More
//         </button>
//       </div>
//       <div className="app__gallery-images">
//         <div className="app__gallery-images_container" ref={scrollRef}>
//           {galleryImages.map((image, index) => (
//             <div
//               className="app__gallery-images_card flex__center"
//               key={`gallery_image-${index + 1}`}
//             >
//               <img src={image} alt="gallery" />
//               <BsInstagram className="gallery__image-icon" />
//             </div>
//           ))}
//         </div>
//         <div className=" app__gallery-images_arrows">
//           <BsArrowLeftShort
//             className="gallery__arrow-icons"
//             onClick={() => scroll("left")}
//           />
//           <BsArrowRightShort
//             className="gallery__arrow-icons"
//             onClick={() => scroll("right")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// new 
// const Gallery = () => {
//   const scrollRef = React.useRef(null);

//   const scroll = (direction) => {
//     const { current } = scrollRef;

//     if (direction === 'left') {
//       current.scrollLeft -= 300;
//     } else {
//       current.scrollLeft += 300;
//     }
//   };

//   return (
//     <div className="app__gallery flex__center">
//       <div className="app__gallery-content">
//         <SubHeading title="Instagram" />
//         <h1 className="headtext__cormorant">Photo Gallery</h1>
//         <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
//         <button type="button" className="custom__button">View More</button>
//       </div>
//       <div className="app__gallery-images">
//         <div className="app__gallery-images_container" ref={scrollRef}>
//           {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
//             <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
//               <img src={image} alt="gallery_image" />
//               <BsInstagram className="gallery__image-icon" />
//             </div>
//           ))}
//         </div>
//         <div className="app__gallery-images_arrows">
//           <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
//           <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
//         </div>
//       </div>
//     </div>
//   );
// };

const imageDetails = [
  { src: images.gallery01, name: 'Shiro' },
  { src: images.gallery02, name: 'Doro Wote' },
  { src: images.gallery03, name: 'Kurt' },
  { src: images.gallery04, name: 'Porage' },
];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">View More</button>
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
                <div className="image-name-overlay">
                  {image.name}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
