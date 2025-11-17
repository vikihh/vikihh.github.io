import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <Router>
      <Toolbar/>
      <div className='page-container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </div>
    </Router>

  )
}

export default App
