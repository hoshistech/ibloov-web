import React, { useRef } from "react";
import PropTypes from "prop-types";
import EventPrice from "./EventPrice";
import Input from "../../../components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "../../../components/Toggle/Toggle";

const EventTime = (props) => {
  const dateRef = useRef();
  const onBlurHandler = () => {
    console.log(1212);
    dateRef.current.type = "text";
  };

  const onFocusHandler = () => {
    console.log(111, dateRef);
    dateRef.current.type = "date";
  };

  const changeHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row">
      <div className='event-time-container'>
        <div>
          <h5>When will the event happen?</h5>
          <small>Select the date and time for the event</small>
        </div>
        <div>
          <div className="row mb-3">
            <div className="event-date-input-container">
              <label htmlFor="eventStartDate2">Starts</label>
              <input
                name="eventStartDate"
                type="text"
                className="form-control event-date-input"
                ref={dateRef}
                id="eventStartDate"
                placeHolder="Thur, 22nd Mar, 2020"
                aria-describedby="event start date"
                onChange={changeHandler}
                onClick="true"
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                required
                //   onInputChange={inputChangeHandler}
              />
              <FontAwesomeIcon
                className="event-start-icon"
                icon="calendar-alt"
                onClick={onFocusHandler}
              />
            </div>
            <div className="event-date-input-container">
              <label htmlFor="eventStartTime">From</label>
              <input
                name="eventStartTime event-time-input"
                type="time"
                className="form-control"
                id="eventStartTime"
                // placeHolder="Thur, 22nd Mar, 2020"
                aria-describedby="event start date"
                required
                //   onInputChange={inputChangeHandler}
              />

              <FontAwesomeIcon className="event-start-icon" icon="clock" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="event-date-input-container">
              <label htmlFor="eventStartDate2">Ends</label>
              <input
                name="eventStartDate"
                type="text"
                className="form-control event-date-input"
                ref={dateRef}
                id="eventStartDate"
                placeHolder="Thur, 22nd Mar, 2020"
                aria-describedby="event start date"
                onChange={changeHandler}
                onClick="true"
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                required
                //   onInputChange={inputChangeHandler}
              />
              <FontAwesomeIcon
                className="event-start-icon"
                icon="calendar-alt"
                onClick={onFocusHandler}
              />
            </div>
            <div className="event-date-input-container">
              <label htmlFor="eventStartTime">To</label>
              <input
                name="eventStartTime event-time-input"
                type="time"
                className="form-control"
                id="eventStartTime"
                // placeHolder="Thur, 22nd Mar, 2020"
                aria-describedby="event start date"
                required
                //   onInputChange={inputChangeHandler}
              />

              <FontAwesomeIcon className="event-start-icon" icon="clock" />
            </div>
          </div>
          <div>
            <p className='private-toggle'>is this a private event? </p><Toggle />
          </div>
        </div>
      </div>
      <div>
        <EventPrice />
      </div>
    </div>
  );
};

EventTime.propTypes = {};

export default EventTime;
