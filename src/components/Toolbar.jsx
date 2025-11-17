import Theme from "../components/Theme.jsx"
import '../App.css'
import Social from '../components/Social.jsx'
import '../styles/Toolbar.css'

function Toolbar() {
  return (
    <div className="toolbar">
      <Theme />
      <Social logo={'github'} />
      <Social logo={'linkedin'} />
    </div>
  );
}

export default Toolbar;