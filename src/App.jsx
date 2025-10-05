import { useState } from 'react'
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
import texts from "./assets/texts.json"

function App() {
  return (
    <div className='vertical-container'>
      <div className='horizontal-container'>
        <Title />
        <Theme />
        <div className='vertical-container'>
          <Social logo={'github'} />
          <Social logo={'linkedin'} />
        </div>
      </div>
      <div className='horizontal-container'>
        <Picture photo={profile_photo} />
        <Text content={'intro'} />
      </div>
      <div className='horizontal-container'>
        <Skills />
      </div>
      <div className='horizontal-container'>
        <Text content={'education'} />
        <Picture photo={radcam} />
      </div>
      <div className='horizontal-container'>
        <Picture photo={softwire} />
        <Text content={'internship'} />
      </div>
    </div>
  )
}

export default App
