import '../styles/GameOver.css';

import aliens from '../images/aliens.gif';
import donuts from '../images/donuts.gif';

export default function GameOver({ win = false, resetGame }) {
  return (
    <div className="game-over">
      <div className="display">
        <h2>{win ? 'Yay!' : 'Uh oh!'}</h2>
        <img src={win ? donuts : aliens} alt="" />
        <div>
          {win
            ? 'You got all the donuts!'
            : 'You clicked the same donut twice! Abducted by aliens...'}
        </div>
        <button onClick={resetGame}>Play Again</button>
      </div>
    </div>
  );
}
