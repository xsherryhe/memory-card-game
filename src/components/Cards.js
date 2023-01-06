import { useRef, useState } from 'react';
import Card from './Card';

export default function Cards({
  length = 12,
  updateScore,
  setGameOver,
  disabled = false,
}) {
  const [order, setOrder] = useState([...new Array(length)].map((_, i) => i));

  const allUnclicked = [...new Array(length)].map(() => false);
  const [clicked, setClicked] = useState(allUnclicked);

  const cards = useRef([...new Array(length)].map((_, i) => i));

  function randomizeOrder() {
    // Fisher-Yates shuffle
    const newOrder = [...order];
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    }
    setOrder(newOrder);
  }

  function endGame(win = false) {
    setGameOver({ win });
    setClicked([...allUnclicked]);
  }

  function handleCardClick(i) {
    return function () {
      if (clicked[i]) return endGame(false);

      updateScore((score) => score + 1);
      const newClicked = [
        ...clicked.slice(0, i),
        true,
        ...clicked.slice(i + 1),
      ];
      if (newClicked.every((card) => card)) return endGame(true);

      setClicked(newClicked);
      randomizeOrder();
    };
  }

  return (
    <div>
      {order.map((i) => (
        <Card
          key={i}
          content={cards.current[i]}
          handleClick={handleCardClick(i)}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
