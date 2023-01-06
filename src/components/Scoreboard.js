import Score from './Score';

export default function Scoreboard({ score = 0, best = 0 }) {
  return (
    <div>
      <Score type="current" score={score} />
      <Score type="best" score={best} />
    </div>
  );
}
