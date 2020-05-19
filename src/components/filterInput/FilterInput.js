import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Input from "../input/Input";

const FilterInput = (props) => {
  const { empty } = props;
  return (
    <div className="filter-input-container">
      {empty ? (
        ""
      ) : (
        <Fragment>
          <label htmlFor="all">in Location</label>
          <Input
            name="all"
            type="text"
            customClassName="form-control filter-input font-bold"
            id="all"
            placeHolder="All"
            aria-describedby="allHelp"
            required
            // value={this.state.email}
            // handleChange={this.emailChange.bind(this)}
          />
        </Fragment>
      )}
    </div>
  );
};

FilterInput.propTypes = {
  empty: PropTypes.bool,
};

export default FilterInput;
