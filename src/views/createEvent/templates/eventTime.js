import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import EventPrice from "./EventPrice";
import Input from "../../../components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "../../../components/Toggle/Toggle";

const EventTime = (props) => {
  const startDateRef = useRef();
  const endDateRef = useRef();

  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [isPrivateEvent, setIsPrivateEvent] = useState(false);
  const [showPricing, setShowPricing] = useState(true);

  const onBlurHandler = () => {
    startDateRef.current.type = "text";
    endDateRef.current.type = "text";
  };

  const onFocusHandler = () => {
    startDateRef.current.type = "date";
    endDateRef.current.type = "date";
  };

  const changeHandler = (e) => {
    e.preventDefault();
    const dateId = e.target.name;
    const value = e.target.value;
    console.log(13, dateId);

    if (dateId === "eventStartDate") {
      setEventStartDate(value);
    } else {
      setEventEndDate(value);
    }
  };

  const privateEventHandler = (e) => {
    const isPrivateEvent = e.target.checked;
    setIsPrivateEvent(isPrivateEvent);
  };

  const onToggleEventFeeHandler = (e) => {
    const eventId = e.target.id;
    if (eventId === "eventFree") {
      setShowPricing(false);
      return;
    }
    setShowPricing(true);
  };

  return (
    <div className="row">
      <div className="event-time-container">
        <div>
          <h5>When will the event happen?</h5>
          <small>Select the date and time for the event</small>
        </div>
        <div>
          <div className="row mb-3">
            <div className="event-date-input-container">
              <label htmlFor="eventStartDate">Starts</label>
              <input
                name="eventStartDate"
                type="text"
                className="form-control event-date-input"
                ref={startDateRef}
                id="eventStartDate"
                placeholder="Thur, 22nd Mar, 2020"
                aria-describedby="event start date"
                onChange={changeHandler}
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
                name="eventStartTime"
                type="time"
                className="form-control event-time-input"
                id="eventStartTime"
                aria-describedby="event start date"
                required
              />

              <FontAwesomeIcon className="event-start-icon" icon="clock" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="event-date-input-container">
              <label htmlFor="eventStartDate2">Ends</label>
              <input
                name="eventEndDate"
                type="text"
                className="form-control event-date-input"
                ref={endDateRef}
                id="eventStartDate"
                placeholder="Thur, 22nd Mar, 2020"
                aria-describedby="event end date"
                onChange={changeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                required
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
                name="eventEndTime"
                type="time"
                className="form-control  event-time-input"
                id="eventEndTime"
                aria-describedby="event start date"
                required
              />

              <FontAwesomeIcon className="event-start-icon" icon="clock" />
            </div>
          </div>
          <div>
            <p className="private-toggle">is this a private event? </p>
            <Toggle handleClick={privateEventHandler} />
          </div>
        </div>
      </div>
      <div>
        <EventPrice
          showPriceHandler={onToggleEventFeeHandler}
          showPricing={showPricing}
        />
      </div>
    </div>
  );
};

EventTime.propTypes = {};

export default EventTime;
