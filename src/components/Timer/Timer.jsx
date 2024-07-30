/* eslint-disable react/prop-types */
import "./Timer.scss";
import { useEffect, useState, useRef } from "react";

function Timer({ duration, onTimeUp }) {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (counter >= duration) {
      clearInterval(intervalRef.current);
      onTimeUp();
    }
  }, [counter, duration, onTimeUp]);

  const remainingTime = Math.max(duration - counter, 0);
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const progressLoad = 100 * (counter / duration);

  return (
    <div className="answer-timer-container">
      <div className="time-remaining">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div
        style={{
          width: `${progressLoad}%`,
          backgroundColor: `${
            progressLoad < 40
              ? "lightgreen"
              : progressLoad < 70
              ? "orange"
              : "red"
          }`,
        }}
        className="progress"
      ></div>
    </div>
  );
}

export default Timer;
