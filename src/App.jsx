import { useEffect, useState } from "react";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple');
      const data = await response.json();

      const formattedQuestions = data.results.map((item) => ({
        question: item.question,
        choices: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
        correctAnswer: item.correct_answer,
      }));

      setQuestions(formattedQuestions);
    } catch (err) {
      console.log(err);
    }
  }

  return questions.length ? <Quiz questions={questions} /> : null;
}

export default App;
