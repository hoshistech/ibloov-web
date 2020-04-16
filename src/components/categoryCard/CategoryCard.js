import React from "react";
import PropTypes from "prop-types";

import "./CategoryCard.css";
const CategoryCard = (props) => {
  const { categoryTitle, categoryCount, categoryImage } = props;

  return (
    <div className="category-card">
      <img
        src={categoryImage}
        alt="category image"
        className="category-card-image"
      />
      <div>
        <p className="category-title bold-600">{categoryTitle} </p>
        <p className="category-count">{categoryCount} events</p>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {};

export default CategoryCard;
