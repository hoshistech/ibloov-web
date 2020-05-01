import React from "react";
import PropTypes from "prop-types";

import "./CategoryCard.css";
import SVG from "../svgLoader/NightLifeSvg";
const CategoryCard = (props) => {
  const {
    categoryTitle,
    categoryCount,
    categoryImage,
    showCount,
    children,
  } = props;

  return (
    <div className="category-card">
      {/* <img
        src={categoryImage}
        alt="category image"
        className="category-card-image"
      /> */}
      {children}
      <div>
        <p className="category-title bold-600">{categoryTitle} </p>
        {showCount ? (
          <p className="category-count">{categoryCount} events</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  categoryCount: PropTypes.number,
  showCount: PropTypes.bool,
};

export default CategoryCard;
