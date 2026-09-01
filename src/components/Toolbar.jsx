import Theme from "../components/Theme.jsx"
import '../App.css'
import Social from '../components/Social.jsx'
import '../styles/Toolbar.css'
import { FaDice } from "react-icons/fa";

function Toolbar() {
  return (
    <div className="toolbar">
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
    </div>
  );
}

export default Toolbar;