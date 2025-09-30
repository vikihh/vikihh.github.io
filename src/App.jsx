import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box'

function App() {

  return (
    <div className='vertical-container'>
      <div className='horizontal-container'>
        <Box content={"Viktoriya Hristova"}/>
        <Box content={""} isButton={true}/>
        <Box content={""} isButton={true}/>
      </div>
      <div className='horizontal-container'>
        <Box content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nisi turpis. In et sapien ut metus mattis mattis."}/>
        <Box content={"Photo"}/>
        <Box content={"Box"}/>
      </div>
      <div className='horizontal-container'>
        <Box content={"Box"}/>
        <Box content={"Box"}/>
      </div>
      <div className='horizontal-container'>
        <Box content={
          <div>

            
          </div>
        }/>
      </div>
    </div>
  )
}

export default App
