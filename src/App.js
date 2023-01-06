import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import GameOver from './components/GameOver';
import Scoreboard from './components/Scoreboard';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function updateScore(newScoreFn) {
    setBest(Math.max(best, newScoreFn(score)));
    setScore(newScoreFn);
  }

  function resetGame() {
    setGameOver(false);
    setScore(0);
  }

  return (
    <div className="App">
      <Scoreboard score={score} best={best} />
      <Cards
        updateScore={updateScore}
        setGameOver={setGameOver}
        disabled={gameOver}
      />
      {gameOver && <GameOver win={gameOver.win} resetGame={resetGame} />}
    </div>
  );
}

export default App;
