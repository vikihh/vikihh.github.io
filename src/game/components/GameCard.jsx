import '../styles/WordleStyles.css'

function GameCard({ content }) {
  return (
    <div className={`game-card`}>
      {content}
    </div>
  );
}

export default GameCard;