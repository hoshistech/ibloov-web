import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryCard from "../categoryCard/CategoryCard";

import "./CreateEventCategory.css";

const CreateEventCategory = (props) => {
  const {
    children,
    categoryTitle,
    categoryCount,
    showCount,
    name,
    selectHandler,
    red,
  } = props;

  const [selected, setSelected] = useState(false);

  let selectedCategory = "";

  const onSelectEventType = (e) => {
    selectHandler(name);
    setSelected(!selected);
  };

  if (selected) selectedCategory = "selected-category";

  return (
    <div
      className={`single-category-card ${selectedCategory}`}
      onClick={(e) => onSelectEventType(e)}
      name={name}
    >
      <CategoryCard
        categoryTitle={categoryTitle}
        categoryCount={categoryCount}
        showCount={showCount}
        name={name}
      >
        {selected ? red : children}
        {selected ? (
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
  red: PropTypes.object,
};

export default CreateEventCategory;
