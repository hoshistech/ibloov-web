import React, { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";

import "./FilterBar.css";
import Button from "../button/Button";
import FilterInput from "../filterInput/FilterInput";
import FilterSelectInput from "../filterSelectInput/FilterSelectInput";

const categories = [
  "concert",
  "festival",
  "sport",
  "wedding",
  "party",
  "birthday",
  "online"
];

const FilterBar = props => {
  const { selectedCategory, searchEventHandler, selectedValue } = props;

  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");

  const searchTerm = value => {
    setSearch(value);
  };

  const searchEvent = () => {
    searchEventHandler(search);
  };

  return (
    // <details open>
    //   <summary>Events Filter</summary>
    <div className="row filterbar-container">
      <FilterSelectInput
        label="Category"
        placeHolder="All Categories"
        empty={false}
        options={categories}
        selectedCategory={selectedCategory}
        selectedValue={selectedValue}
      />

      <FilterInput empty={false} searchTerm={searchTerm} />

      {/* <FilterInput empty={true} /> */}
      <div className="filter-input-container event-date-container">
        <label htmlFor="eventDateSearch" className="eventDateSearch">
          When
        </label>

        <DatePicker
          selected={date}
          onChange={date => setDate(date)}
          placeholderText="Click to select a date"
          className="form-control home-search-input"
        />
      </div>

      <div className="filter-input-submit">
        <Button
          customClassName="filter-button bold-600"
          onClick={searchEvent}
          btndisabled={false}
        >
          FILTER
        </Button>
      </div>
    </div>
    // </details>
  );
};

export default FilterBar;
