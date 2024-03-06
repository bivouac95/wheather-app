import { useState } from "react";
import getTime from "../utils/timezone";

const timezone = "3600";

function Time() {
  let timeString = getTime(timezone, 'string');
  const [resultString, setResultString] = useState(
    timeString
  );

  setInterval(() => {
    timeString = getTime(timezone, 'string');
    setResultString(timeString);
  }, 5000);
  return <span id="time">{resultString}</span>;
}

export default Time;
