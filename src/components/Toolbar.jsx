import Theme from "../components/Theme.jsx"
import '../App.css'
import Social from '../components/Social.jsx'
import '../styles/Toolbar.css'
import { FaDice } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

function Toolbar() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={`toolbar ${expanded ? "expanded" : "folded"}`}>
      <button
        className="toolbar-toggle"
        onClick={() => setExpanded(!expanded)}
      >
        <FaBars size={"1em"}/>
      </button>
      {expanded && (
        <div className="toolbar-content">
          <Theme />
          <Social logo={'github'} />
          <Social logo={'linkedin'} />
          <div className={"box social-button"}>
          {
            <a href="#/games">
            <FaDice size={"2em"}/>
            </a>
          }
          </div>
        </div>)}
    </div>
  );
}

export default Toolbar;