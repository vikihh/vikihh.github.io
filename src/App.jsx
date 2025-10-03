import { useState } from 'react'
import './App.css'
import Social from './components/Social.jsx'
import Title from './components/Title.jsx'
import Text from './components/Text.jsx'
import Picture from './components/Picture.jsx'
import Skills from './components/Skills.jsx'
import profile_photo from "./assets/profile_photo.jpg"
import radcam from "./assets/radcliffe_camera.jpg"
import softwire from "./assets/softwire_logo.jpg"

function App() {

  return (
    <div className='vertical-container'>
      <div className='horizontal-container'>
        <Title/>
        <Social logo={'github'}/>
        <Social logo={'linkedin'}/>
      </div>
      <div className='horizontal-container'>
        <Text content=""/>
        <Picture photo={profile_photo}/>
      </div>
      <div className='horizontal-container'>
        <Skills/>
      </div>
      <div className='horizontal-container'>
        <Picture photo={radcam}/>
        <Text content=""/>
      </div>
      <div className='horizontal-container'>
        <Text content=""/>
        <Picture photo={softwire}/>
      </div>
    </div>
  )
}

export default App
