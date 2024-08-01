/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import Login from "./components/Login/Login";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (isAuthenticated) {
      getQuestions();
    }
  }, [isAuthenticated]);

  const getQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
      );
      const data = await response.json();
      if (data.results) {
        const formattedQuestions = data.results.map((item) => ({
          question: decodeHTMLEntities(item.question),
          choices: [
            ...item.incorrect_answers.map((answer) =>
              decodeHTMLEntities(answer)
            ),
            decodeHTMLEntities(item.correct_answer),
          ].sort(() => Math.random() - 0.5),
          correctAnswer: decodeHTMLEntities(item.correct_answer),
        }));

        setQuestions(formattedQuestions);
      } else {
        setError("No questions found");
      }
    } catch (err) {
      setError("Failed to fetch questions");
    } finally {
      setLoading(false); 
    }
  };

  const decodeHTMLEntities = (text) => {
    const parser = new DOMParser();
    const decodedString =
      parser.parseFromString(text, "text/html").body.textContent || "";
    return decodedString;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLogin={setIsAuthenticated} />
      ) : (
        <Quiz questions={questions} />
      )}
    </div>
  );
}

export default App;
