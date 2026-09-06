import '../styles/WordleStyles.css'

function GameCard({ name, content }) {
  return (
    <div className={`game-card`}>
      <div className="game-card-name">
        {name}
      </div>

      <div className="game-card-content">
        {content}
      </div>
    </div>
  );
}

export default GameCard;