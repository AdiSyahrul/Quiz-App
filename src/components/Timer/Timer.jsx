/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import "./Timer.scss";
import { useEffect, useState, useRef } from "react";

// eslint-disable-next-line react/prop-types
function Timer({ duration, onTimeUp }) {
  const [counter, setCounter] = useState(0);
  const [progressLoad, setProgressLoad] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoad(100 * (counter / duration));
    if (counter === duration) {
      clearInterval(intervalRef.current);
      setTimeout(() => {
        onTimeUp();
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <div className="answer-timer-container">
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
// Timer.propTypes = {
//     duration: PropTypes.number.isRequired,
//     onTimeUp: PropTypes.func.isRequired
// };

export default Timer;
