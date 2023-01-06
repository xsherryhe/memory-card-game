import '../styles/Card.css';

export default function Card({ image, label, disabled, handleClick }) {
  return (
    <button className="card" onClick={handleClick} disabled={disabled}>
      <img src={image} alt="" />
      {label}
    </button>
  );
}
