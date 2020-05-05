import React from "react";
import PropTypes from "prop-types";

import "./FilterBar.css";
import Button from "../button/Button";
import FilterInput from "../filterInput/FilterInput";
import FilterSelectInput from "../filterSelectInput/FilterSelectInput";

const FilterBar = (props) => {
  return (
    // <details open>
    //   <summary>Events Filter</summary>
    <div className="row filterbar-container">
      <FilterSelectInput
        label="Category"
        placeHolder="Concerts"
        empty={false}
      />

      <FilterSelectInput label="in Location" placeHolder="All" empty={false} />

      <FilterInput empty={true} />

      <div className="filter-input-submit">
        <Button
          customClassName="filter-button bold-600"
          onClick={() => {}}
          btndisabled={false}
        >
          Filter
        </Button>
      </div>
    </div>
    // </details>
  );
};

FilterBar.propTypes = {};

export default FilterBar;
