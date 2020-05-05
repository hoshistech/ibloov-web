import React, { useState } from "react";
import TimePicker from "react-time-picker";

import "./DateClock.css";
const DateClock = (props) => {
  const { timeHandler, name } = props;
  const [time, setTime] = useState("10:00");

  return (
    <div>
      <TimePicker
        onChange={(e) => timeHandler(e, name)}
        value={time}
        clockClassName="event-clock"
      />
    </div>
  );
};

export default DateClock;
