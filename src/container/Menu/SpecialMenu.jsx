import React, { useState } from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const maxLinesToShow = 6;
  const [showAllLines, setShowAllLines] = useState(false);

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Main Dish</p>
          <div className="app__specialMenu_menu_items">
            {data.wines
              .slice(0, showAllLines ? data.wines.length : maxLinesToShow)
              .map((wine, index) => (
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.tej} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Bevarages</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      {data.wines.length > maxLinesToShow && (
        <div className="app__specialMenu-button-container">
          <button
            type="button"
            className="custom__button"
            onClick={() => setShowAllLines(!showAllLines)}
          >
            {showAllLines ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SpecialMenu;
