import React from "react";

import "./SearchBar.css";
import Button from "../../../../components/button/Button";

const SearchBar = (props) => {
  return (
    <div className="row homepage-search-container">
      <div className="hompepage-search-input-container">
        <label htmlFor="eventNameSearch" className="">
          Looking for
        </label>
        <input
          type="text"
          className="form-control home-search-input home-search-event-name"
          id="eventNameSearch"
          aria-describedby="eventNameSearch"
          placeholder="Search by Event Name or Hashtag"
        ></input>
      </div>
      <div className="home-search-line"></div>
      <div className="hompepage-search-input-container">
        <label htmlFor="locationSearch" className="">
          In
        </label>
        <input
          type="text"
          className="form-control home-search-input"
          id="locationSearch"
          aria-describedby="locationSearch"
          placeholder="Utah"
        ></input>
      </div>
      <div className="home-search-line"></div>
      <div className="hompepage-search-input-container">
        <label htmlFor="eventNameSearch" className="">
          When
        </label>
        <input
          type="text"
          className="form-control home-search-input"
          id="eventNameSearch"
          aria-describedby="eventNameSearch"
          placeholder="28 March 2020"
        ></input>
      </div>
      <div className="home-search-btn-container">
        <Button
          btndisabled={false}
          onClick={() => {}}
          customClassName="home-search-btn"
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
