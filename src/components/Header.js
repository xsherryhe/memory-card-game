import '../styles/Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faRocket} />
      <div>
        <h1>Welcome to the Space Donut Shop!</h1>
        <h2>Click on all the donuts.</h2>
        <h2>
          Don't click the same donut twice, or you'll be abducted by aliens!
        </h2>
      </div>
      <FontAwesomeIcon icon={faRocket} />
    </header>
  );
}
