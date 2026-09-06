import '../App.css'
import '../game/styles/WordleStyles.css'
import wordle from'../game/assets/wordle.png'
import wordlebg from'../game/assets/wordle-bg.png'
import GameCard from '../game/components/GameCard.jsx'

function GamesPage() {
  return (
    <div className='game'>
      <div className='game-background' />
      <div className='vertical-container'>
      <div className='wordle-title'>GAMES</div>
      <div className='horizontal-container'>
        <a href="#/games/wordle">
            <GameCard content= {<img src={wordle} alt="Photo" />} > </GameCard>
        </a>
        <a href="#/games/wordle-bg">
            <GameCard content= {<img src={wordlebg} alt="Photo" />} > </GameCard>
        </a>
      </div>
    </div>
    </div>
  )
}

export default GamesPage;
