import React, { Fragment } from "react";
import PropTypes from "prop-types";


const FilterInput = props => {
  const { empty, searchTerm } = props; 

  const onInputChange = (e) => {
    const value = e.target.value;
    searchTerm(value)
  };
  return (
    <div className="filter-input-container">
      {empty ? (
        ""
      ) : (
        <Fragment>
          <label htmlFor="all">in Location</label>
          <input
            name="all"
            type="text"
            className="form-control filter-input font-bold"
            id="all"
            placeholder="All"
            aria-describedby="allHelp"
            required
            onChange={onInputChange}
          />
        </Fragment>
      )}
    </div>
  );
};

FilterInput.propTypes = {
  empty: PropTypes.bool
};

export default FilterInput;
