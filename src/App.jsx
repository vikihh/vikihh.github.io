import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <Router>
      <Toolbar/>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wordle" element={<Game language={'English'}/>}/>
          <Route path="/wordle-bg" element={<Game language={'Bulgarian'}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;