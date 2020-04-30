import React from "react";
import PropTypes from "prop-types";

import "./FilterBar.css";
import Input from "../input/Input";
import Button from "../button/Button";
import SelectInput from "../selectInput/SelectInput";
import FilterInput from "../filterInput/FilterInput";
import FilterSelectInput from "../filterSelectInput/FilterSelectInput";

const FilterBar = (props) => {
  const {} = props;
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
          // onclick={this.onButtonPress.bind(this)}
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
