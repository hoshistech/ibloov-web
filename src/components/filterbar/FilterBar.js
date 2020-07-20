import React, { Fragment , useState} from "react";

import "./FilterBar.css";
import Button from "../button/Button";
import FilterInput from "../filterInput/FilterInput";
import FilterSelectInput from "../filterSelectInput/FilterSelectInput";
import SelectInput from "../selectInput/SelectInput";

const categories = ["concert", "festival", "sport", "wedding", "party", "birthday", "online"];

const FilterBar = props => {
  const { selectedCategory, searchEventHandler } = props;

   const [search, setSearch] = useState("")

  const searchTerm = (value) => {
    console.log(88, value);
    setSearch(value)
  }

  const searchEvent = () => {
    console.log('ev', search);
    searchEventHandler(search)
  }

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
      />

      {/* <FilterSelectInput label="in Location" placeHolder="All" empty={false} /> */}
      <FilterInput empty={false} searchTerm={searchTerm} />

      <FilterInput empty={true} />

      <div className="filter-input-submit">
        <Button
          customClassName="filter-button bold-600"
          onClick={searchEvent}
          btndisabled={false}
        >
          Filter
        </Button>
      </div>
    </div>
    // </details>
  );
};

export default FilterBar;
