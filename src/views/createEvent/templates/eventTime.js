import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import EventPrice from "./EventPrice";
import Input from "../../../components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "../../../components/Toggle/Toggle";
import DateClock from "../../../components/dateClock/DateClock";

const EventTime = (props) => {
  const { setEventDate } = props;
  const startDateRef = useRef();
  const endDateRef = useRef();

  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
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

  const onEventDateHandler = (e) => {
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

  const onEventTimeHandler = (e) => {
    e.preventDefault();
    const dateId = e.target.name;
    const value = e.target.value;

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

  const setTimeHandler = (time, id) => {
    console.log(121113, time, id);
    if (id === "timeStart") {
      setStartTime(time);
    } else {
      setEndTime(time);
    }
  };

  useEffect(() => {
    const startDate = `${eventStartDate} ${startTime}`;
    const endDate = `${eventEndDate} ${endTime}`;
    setEventDate(startDate, endDate, isPrivateEvent);
  }, [
    setEventDate,
    eventStartDate,
    eventEndDate,
    isPrivateEvent,
    startTime,
    endTime,
  ]);

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
                onChange={onEventDateHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                onClick={onFocusHandler}
                required
              />
              <FontAwesomeIcon
                className="event-start-icon"
                icon="calendar-alt"
                onClick={onFocusHandler}
              />
            </div>
            <div className="event-date-input-container">
              <label htmlFor="eventStartTime">From</label>
              <DateClock timeHandler={setTimeHandler} name="timeStart" />
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
                onChange={onEventDateHandler}
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
              <DateClock timeHandler={setTimeHandler} name="timeEnd" />
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

EventTime.propTypes = {
  setEventDate: PropTypes.func.isRequired,
};

export default EventTime;
