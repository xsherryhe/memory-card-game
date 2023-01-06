export default function Card({ content, disabled, handleClick }) {
  return (
    <button onClick={handleClick} disabled={disabled}>
      {content}
    </button>
  );
}
