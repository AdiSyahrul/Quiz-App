// import './App.css'
import Quiz from './components/Quiz'
import { jsQuizz } from './components/questions'
function App() {
   return (
    <div className='App'>
      <Quiz questions={jsQuizz.questions}/>
    </div>
  )
}

export default App
