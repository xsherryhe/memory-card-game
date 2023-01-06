import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import GameOver from './components/GameOver';
import Scoreboard from './components/Scoreboard';
import Footer from './components/Footer';
import Header from './components/Header';

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
      <Header />
      <Scoreboard score={score} best={best} />
      <Cards
        updateScore={updateScore}
        setGameOver={setGameOver}
        disabled={gameOver}
      />
      {gameOver && <GameOver win={gameOver.win} resetGame={resetGame} />}
      <Footer />
    </div>
  );
}

export default App;
