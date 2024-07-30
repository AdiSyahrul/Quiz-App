import { useEffect, useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import SignUp from "./components/Login/Login";
function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple');
      const data = await response.json();

      // const formattedQuestions = data.results.map((item) => ({
      //   question: item.question,
      //   choices: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
      //   correctAnswer: item.correct_answer,
      // }));
      const formattedQuestions = data.results.map((item) => ({
        question: decodeHTMLEntities(item.question),
        choices: [...item.incorrect_answers.map(answer => decodeHTMLEntities(answer)), decodeHTMLEntities(item.correct_answer)].sort(() => Math.random() - 0.5),
        correctAnswer: decodeHTMLEntities(item.correct_answer),
      }));

      setQuestions(formattedQuestions);

      setQuestions(formattedQuestions);
    } catch (err) {
      console.log(err);
    }
  }
  const decodeHTMLEntities = (text) => {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(text, 'text/html').body.textContent || "";
    return decodedString;
  }
  return (<div>
    <SignUp/>
  </div>)
  // return questions.length ? <Quiz questions={questions} /> : null;
}

export default App;
