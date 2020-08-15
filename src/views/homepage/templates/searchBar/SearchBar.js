import React, { useState } from "react";
import moment from "moment";
import DatePicker, { CalendarContainer } from "react-datepicker";

import "./SearchBar.css";
import Button from "../../../../components/button/Button";
import { Redirect, Link, useHistory } from "react-router-dom";

const MyContainer = ({ className, children }) => {
  return (
    <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
      <CalendarContainer className={className}>
        <div style={{ background: "#f0f0f0" }}>What is your favorite day?</div>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};

const SearchBar = props => {
  // const [url, setUrl] = useState("/events/search");
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const history = useHistory();

  const handleSearch = event => {
    event.preventDefault();
    let url = "/events/search";
    const momentDate = moment(date).format("MM/DD/yyyy");

    console.log(4, eventName, location, date);
    if (eventName !== "") {
      url += `?name=${eventName}`;
    }
    if (location !== "") {
      if (url.includes("?")) url += `&location=${location}`;
      else url += `?location=${location}`;
    }
    if (date !== "") {
      if (url.includes("?")) url += `&date=${momentDate}`;
      else url += `?date=${momentDate}`;
    }
    // setUrl(url);
    history.push(url);
  };

  const handleInputChange = event => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === "eventNameSearch") {
      setEventName(value);
    } else if (id === "locationSearch") {
      setLocation(value);
    } else if (id === "eventDateSearch") {
      setDate(value);
    }
  };

  return (
    <form onSubmit={handleSearch}>
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
            onChange={handleInputChange}
          />
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
            onChange={handleInputChange}
          />
        </div>
        <div className="home-search-line"></div>
        <div className="hompepage-search-input-container event-date-container">
          <label htmlFor="eventDateSearch" className="eventDateSearch">
            When
          </label>
          {/* <input
            type="date"
            className="form-control home-search-input"
            id="eventDateSearch"
            aria-describedby="eventNameSearch"
            placeholder="28 March 2020"
            onChange={handleInputChange}
          /> */}
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            // calendarContainer={MyContainer}
            className="form-control home-search-input"
          />
        </div>
        <div className="home-search-btn-container">
          {/* <Link to={url}> */}
          <Button
            btndisabled={false}
            // onClick={() => {}}
            onClick={handleSearch}
            customClassName="home-search-btn"
          >
            SEARCH
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
