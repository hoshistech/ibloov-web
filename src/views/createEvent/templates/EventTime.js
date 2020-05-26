import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import EventPrice from "./EventPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "../../../components/Toggle/Toggle";
import DateClock from "../../../components/dateClock/DateClock";

const EventTime = (props) => {
  const { setEventDate, setPriceData, isEventPrivate, isEventPaid } = props;
  const startDateRef = useRef();

  const [eventStartDate, setEventStartDate] = useState("");
  const [startTime, setStartTime] = useState("10:00");
  const [isPrivateEvent, setIsPrivateEvent] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [ticketTypeNumber, setTicketTypeNumber] = useState(3);
  const [eventPrice, setEventPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const toTextHandler = () => {
    startDateRef.current.type = "text";
  };

  const toDateHandler = () => {
    startDateRef.current.type = "date";
  };

  const onEventDateHandler = (e) => {
    e.preventDefault();
    const dateId = e.target.name;
    const value = e.target.value;

    if (dateId === "eventStartDate") {
      setEventStartDate(value);
    }
  };

  const privateEventHandler = (e) => {
    const isPrivateEvent = e.target.checked;
    setIsPrivateEvent(isPrivateEvent);
  };

  const setTimeHandler = (time, id) => {
    if (id === "timeStart") {
      setStartTime(time);
    }
  };

  useEffect(() => {
    const startDate = `${eventStartDate} ${startTime}`;

    setEventDate(startDate);
    setPriceData(currency, eventPrice);
    isEventPrivate(isPrivateEvent);
    isEventPaid(isPaid);
  }, [
    setEventDate,
    eventStartDate,
    isEventPrivate,
    isPrivateEvent,
    startTime,
    currency,
    eventPrice,
    setPriceData,
    isEventPaid,
    isPaid,
  ]);

  const onToggleEventFeeHandler = (e) => {
    const eventId = e.target.id;
    if (eventId === "eventFree") {
      setShowPricing(false);
      setIsPaid(false);
      return;
    }
    setShowPricing(true);
    setIsPaid(true);
  };

  const increaseTicketTypeHandler = () => {
    if (ticketTypeNumber === 3) return;
    setTicketTypeNumber(ticketTypeNumber + 1);
  };

  const decreaseTicketTypeHandler = () => {
    if (ticketTypeNumber === 1) return;
    setTicketTypeNumber(ticketTypeNumber - 1);
  };

  const changeTicketTypeNumberHandler = (e) => {
    const value = e.target.value;
    setTicketTypeNumber(value);
  };

  const eventPriceHandler = (e) => {
    const price = e.target.value;
    setEventPrice(price);
  };

  const selectCurrencyHandler = (e) => {
    const selectedCurrency = e.target.value;
    if (selectedCurrency === "") {
      return;
    }
    setCurrency(selectedCurrency);
  };

  return (
    <div className="row">
      <div className="event-time-container">
        <div className="create-event-title-header">
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
                onFocus={toDateHandler}
                onBlur={toTextHandler}
                onClick={toDateHandler}
                onMouseOver={toDateHandler}
                required
              />
              <FontAwesomeIcon
                className="event-start-icon"
                icon="calendar-alt"
                onClick={toDateHandler}
              />
            </div>
            <div className="event-date-input-container">
              <label htmlFor="eventStartTime">From</label>
              <DateClock timeHandler={setTimeHandler} name="timeStart" />
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
          ticketNumber={ticketTypeNumber}
          increaseTicketType={increaseTicketTypeHandler}
          decreaseTicketType={decreaseTicketTypeHandler}
          changeTicketTypeNumber={changeTicketTypeNumberHandler}
          onSelectCurrency={selectCurrencyHandler}
          setEventPrice={eventPriceHandler}
          eventPrice={eventPrice}
        />
      </div>
    </div>
  );
};

EventTime.propTypes = {
  setEventDate: PropTypes.func.isRequired,
};

export default EventTime;
