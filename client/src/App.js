import './App.css';

//Importing components
import QuestionCard from './components/QuesionCard';
import QuizPageHeader from './components/QuizPageHeader';

function App() {
  return (
    <div className="App quizPage">
      <QuizPageHeader />
      <QuestionCard />
    </div>
  );
}

export default App;
