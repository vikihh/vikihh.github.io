import '../styles/GameContentStyles.css';
function Square({ value, className = "" }) {
  return (
    <div className={`square ${className}`}>
      {value}
    </div>
  );
}
export default Square;