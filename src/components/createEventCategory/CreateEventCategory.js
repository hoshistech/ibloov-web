import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryCard from "../categoryCard/CategoryCard";

import "./CreateEventCategory.css";

const CreateEventCategory = props => {
  const {
    children,
    categoryTitle,
    categoryCount,
    showCount,
    name,
    selected,
    selectHandler,
    red
  } = props;

  let selectedCategory = "";

  if (selected === name) selectedCategory = "selected-category";

  return (
    <div
      className={`single-category-card ${selectedCategory}`}
      onClick={e => selectHandler(e, categoryTitle, name)}
      // onClick={selectHandler}
      name={name}
    >
      <CategoryCard
        categoryTitle={categoryTitle}
        categoryCount={categoryCount}
        showCount={showCount}
        name={name}
        handleClick={e => {
          e.preventDefault();
        }}
      >
        {selected === name ? red : children}
        {selected === name ? (
          <FontAwesomeIcon
            className="pt-1 category-card-icon"
            icon="check-circle"
            name={name}
          />
        ) : (
          ""
        )}
      </CategoryCard>
    </div>
  );
};

CreateEventCategory.propTypes = {
  children: PropTypes.object,
  categoryTitle: PropTypes.string,
  categoryCount: PropTypes.number,
  showCount: PropTypes.bool,
  name: PropTypes.string,
  selectHandler: PropTypes.func,
  red: PropTypes.object
};

export default CreateEventCategory;
