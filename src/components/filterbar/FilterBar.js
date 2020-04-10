import React from "react";
import PropTypes from "prop-types";

import "./FilterBar.css";
import Input from "../input/Input";
import Button from "../button/Button";
import SelectInput from "../selectInput/SelectInput";

const FilterBar = (props) => {
  return (
    <details open>
      <summary>Events Filter</summary>
      <div className="row filterbar-container">
        <div className="filter-input-container">
          <label htmlFor="search-event">Search for</label>
          <Input
            name="search-event"
            type="text"
            customClassName="form-control filter-input"
            id="search-event"
            placeHolder="search for any event"
            aria-describedby="searchEventHelp"
            required
            // value={this.state.email}
            // handleChange={this.emailChange.bind(this)}
          />
        </div>

        <div className="filter-input-container">
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
        </div>

        {/* <div className="filter-input-container">
          <label htmlFor="date">Happening when</label>
          <Input
            name="date"
            type="text"
            customClassName="form-control filter-input font-bold"
            id="date"
            placeHolder="Any date"
            aria-describedby="dateHelp"
            required
            onFocus={(e) => (e.target.type = "date")}
            handleBlur={(e) => (e.target.type = "text")}
            // value={this.state.email}
            // handleChange={this.emailChange.bind(this)}
          /> 
        </div> */}

        <div className="filter-input-container">
          <label htmlFor="date">Happening when</label>
          {/* <Input
            name="date"
            type="text"
            customClassName="form-control filter-input font-bold"
            id="date"
            placeHolder="Any date"
            aria-describedby="dateHelp"
            required
            onFocus={(e) => (e.target.type = "date")}
            handleBlur={(e) => (e.target.type = "text")}
            // value={this.state.email}
            // handleChange={this.emailChange.bind(this)}
          /> */}
          <SelectInput />
        </div>

        <div className="filter-input-submit">
          <Button
            customClassName="filter-button bold-600"
            // onclick={this.onButtonPress.bind(this)}
          >
            Filter
          </Button>
        </div>
      </div>
    </details>
  );
};

FilterBar.propTypes = {};

export default FilterBar;
