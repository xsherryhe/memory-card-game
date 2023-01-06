import Score from './Score';
import '../styles/Scoreboard.css';

export default function Scoreboard({ score = 0, best = 0 }) {
  return (
    <div className="scoreboard">
      <Score type="current" score={score} />
      <Score type="best" score={best} />
    </div>
  );
}
