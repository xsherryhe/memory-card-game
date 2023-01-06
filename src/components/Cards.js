import { useRef, useState } from 'react';
import '../styles/Cards.css';

import astronauts from '../images/astronauts.png';
import bigBang from '../images/big-bang.png';
import blackHole from '../images/black-hole.png';
import cluster from '../images/cluster.png';
import comets from '../images/comets.png';
import entropy from '../images/entropy.png';
import galaxy from '../images/galaxy.png';
import milkyWay from '../images/milky-way.png';
import planets from '../images/planets.png';
import solar from '../images/solar.png';
import spaceships from '../images/spaceships.png';
import stars from '../images/stars.png';

import Card from './Card';

export default function Cards({ updateScore, setGameOver, disabled = false }) {
  const [order, setOrder] = useState([...new Array(12)].map((_, i) => i));

  const allUnclicked = [...new Array(12)].map(() => false);
  const [clicked, setClicked] = useState(allUnclicked);

  const cards = useRef([
    { image: astronauts, label: 'Astronauts Donut' },
    { image: bigBang, label: 'Big Bang Donut' },
    { image: blackHole, label: 'Black Hole Donut' },
    { image: cluster, label: 'Cluster Donut' },
    { image: comets, label: 'Comets Donut' },
    { image: entropy, label: 'Entropy Donut' },
    { image: galaxy, label: 'Galaxy Donut' },
    { image: milkyWay, label: 'Milky Way Donut' },
    { image: planets, label: 'Planets Donut' },
    { image: solar, label: 'Solar Donut' },
    { image: spaceships, label: 'Spaceships Donut' },
    { image: stars, label: 'Stars Donut' },
  ]);

  function randomizeOrder() {
    // Fisher-Yates shuffle
    const newOrder = [...order];
    for (let i = 11; i > 0; i--) {
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
    <div className="cards">
      {order.map((i) => {
        const { image, label } = cards.current[i];
        return (
          <Card
            key={i}
            image={image}
            label={label}
            handleClick={handleCardClick(i)}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
}
