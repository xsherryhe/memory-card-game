// TO DO: Add an image for each message
export default function GameOver({ win = false, resetGame }) {
  const message = win
    ? 'Yay! You got all the donuts!'
    : 'Uh oh! You clicked on the same donut twice! Abducted by aliens...';

  return (
    <div>
      <div>{message}</div>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
}
