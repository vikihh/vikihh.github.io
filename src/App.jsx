import './App.css'
import Social from './components/Social.jsx'
import Title from './components/Title.jsx'
import Text from './components/Text.jsx'
import Picture from './components/Picture.jsx'
import Skills from './components/Skills.jsx'
import Theme from "./components/Theme.jsx"
import profile_photo from "./assets/photos/profile_photo.jpg"
import radcam from "./assets/photos/radcliffe_camera.jpg"
import softwire from "./assets/photos/softwire_logo.jpg"
import background from "./assets/background.svg"
import Box from './components/Box.jsx'
import Projects from './components/Projects.jsx'

function App() {
  return (
    <div className='page'>
      <img src={background} alt="" className="background" />
      <div className='vertical-container'>
        <Title />
        <div className='horizontal-container'>
          <div className='vertical-container'>
            <Picture photo={profile_photo} />
            <div className='horizontal-small-gap-container'>
              <Theme />
              <Social logo={'github'} />
              <Social logo={'linkedin'} />
            </div>
            <Box content= {<a href="#projects">Projects</a>} className="button"/>
          </div>
          <Text children={'intro'} />
        </div>
        <div className='horizontal-container'>
          <Skills />
        </div>
        <div className='horizontal-container'>
          <Text children={'education'} />
          <Picture photo={radcam} />
        </div>
        <div className='horizontal-container'>
          <Picture photo={softwire} />
          <Text children={'internship'} />
        </div>
        <Projects />
      </div>
    </div>
  )
}

export default App
