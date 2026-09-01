import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import GamesPage from './pages/GamesPage';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <Router>
      <Toolbar/>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/games" element={<GamesPage/>}/>
          <Route path="/games/wordle" element={<Game language={'English'}/>}/>
          <Route path="/games/wordle-bg" element={<Game language={'Bulgarian'}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;