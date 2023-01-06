export default function GameOver({ win = false, resetGame }) {
  const message = win
    ? 'Yay! You clicked on all cards!'
    : 'Uh oh! You clicked on the same card twice! Game over!';

  return (
    <div>
      <div>{message}</div>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
}
