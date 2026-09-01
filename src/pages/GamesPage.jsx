import '../App.css'
import '../game/styles/WordleStyles.css'
import Box from '../components/Box.jsx'
import wordle from'../game/assets/wordle.png'
import wordlebg from'../game/assets/wordle-bg.png'

function GamesPage() {
  return (
    <div className='game'>
      <div className='game-background' />
      <div className='vertical-container'>
      <div className='wordle-title'>GAMES</div>
      <div className='horizontal-container'>
        <a href="#/games/wordle">
            <Box content= {<img src={wordle} alt="Photo" width={150} height={200}/>}> </Box>
        </a>
        <a href="#/games/wordle-bg">
            <Box content= {<img src={wordlebg} alt="Photo" width={150} height={200}/>}> </Box>
        </a>
      </div>
    </div>
    </div>
  )
}

export default GamesPage;
