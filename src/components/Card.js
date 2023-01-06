export default function Card({ content, handleClick }) {
  return <button onClick={handleClick}>{content}</button>;
}
