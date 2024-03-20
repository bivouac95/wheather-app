import { useState } from "react";
import getTime from "../utils/timezone";

function Time(props) {
  const [time, setTime] = useState(
    getTime(props.timezone, 'string')
  );

  setInterval(() => {
    setTime(getTime(props.timezone, 'string'));
  }, 5000);
  return <span id="time">{time}</span>;
}

export default Time;