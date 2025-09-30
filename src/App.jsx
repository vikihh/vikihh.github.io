import { useState } from 'react'
import './App.css'
import Box from './components/Box.jsx'
import Social from './components/Social.jsx'
import Title from './components/Title.jsx'
import Text from './components/Text.jsx'

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
        <Text content=""/>
        <Text content=""/>
      </div>
      <div className='horizontal-container'>
        <Text content=""/>
      </div>
      <div className='horizontal-container'>
        <Text content=""/>
        <Text content=""/>
      </div>
    </div>
  )
}

export default App
