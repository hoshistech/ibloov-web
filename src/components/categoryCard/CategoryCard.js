import React from "react";
import PropTypes from "prop-types";

import "./CategoryCard.css";

const CategoryCard = (props) => {
  const { categoryTitle, categoryCount, showCount, children, name } = props;

  return (
    <div className="category-card">
      {children}
      <div name={name}>
        <p className="category-title bold-600" name={name}>
          {categoryTitle}{" "}
        </p>
        {showCount ? (
          <p className="category-count" name={name}>
            {categoryCount} events
          </p>
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
