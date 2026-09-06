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
      <div className='games'>
        <a href="#/games/wordle">
            <GameCard name = {"Wordle"} content= {<img src={wordle} alt="Wordle" />} />
        </a>
        <a href="#/games/wordle-bg">
            <GameCard name = {"BG Wordle"} content= {<img src={wordlebg} alt="BG Wordle" />} />
        </a>
      </div>
    </div>
    </div>
  )
}

export default GamesPage;
