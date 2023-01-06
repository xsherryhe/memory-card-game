import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  function resetScore() {
    setBest(Math.max(best, score));
    setScore(0);
  }

  return (
    <div className="App">
      <Scoreboard score={score} best={best} />
      <Cards setScore={setScore} resetScore={resetScore} />
    </div>
  );
}

export default App;
