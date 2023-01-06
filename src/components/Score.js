import { capitalize } from '../utilities';

export default function Score({ type, score = 0 }) {
  return (
    <div>
      {capitalize(type)} Score: {score}
    </div>
  );
}
