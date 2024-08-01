/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { resultInitialState } from "../questions";
import "./Quiz.scss";
import Timer from "../Timer/Timer";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [totalTimeExpired, setTotalTimeExpired] = useState(false);
  const totalDuration = 3 * 60;
  if (!questions || questions.length === 0) {
    return <div>Loading...</div>;
  }
  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    setAnswer(answer === correctAnswer);
  };

  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 10,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
    setTotalTimeExpired(false);
    setCurrentQuestion(0);
  };

  const handleTimer = () => {
    setTotalTimeExpired(true);
    setResult((prev) => ({
      ...prev,
      wrongAnswers: prev.wrongAnswers + (questions.length - currentQuestion),
    }));
    setShowResult(true);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          {!totalTimeExpired && (
            <Timer
              duration={totalDuration}
              onTimeUp={handleTimer}
            />
          )}
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIdx === index ? "selected-answer" : null}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button
              onClick={() => onClickNext(answer)}
              disabled={answerIdx === null}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <button onClick={onTryAgain}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
