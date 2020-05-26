import React, { useState } from "react";
import TimePicker from "react-time-picker";

import "./DateClock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DateClock = (props) => {
  const { timeHandler, name } = props;
  const [time, setTime] = useState("10:00");

  return (
    <div className='clock-picker-container'>
      <TimePicker
        onChange={(e) => timeHandler(e, name)}
        value={time}
        clockClassName="event-clock"
        clearIcon={false}
        isOpen={false}
        disableClock={true}
      />

      <FontAwesomeIcon className="date-clock-icon" icon="clock" />
    </div>
  );
};

export default DateClock;
