import React, { Fragment } from "react";
import PropTypes from "prop-types";
import SelectInput from "../selectInput/SelectInput";

const FilterSelectInput = props => {
  const { empty, placeHolder, label, options, selectedCategory } = props;
  return (
    <div className="filter-input-container">
      {empty ? (
        ""
      ) : (
        <Fragment>
          <label htmlFor="date">{label}</label>
          <SelectInput
            placeHolder={placeHolder}
            options={options}
            onSelectCategory={selectedCategory}
          />
        </Fragment>
      )}
    </div>
  );
};

FilterSelectInput.propTypes = {
  empty: PropTypes.bool,
  placeHolder: PropTypes.string,
  label: PropTypes.string
};

export default FilterSelectInput;
