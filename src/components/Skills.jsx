import Box from "./Box.jsx"
import '../App.css'
import cpp from '../assets/C++.png'
import kotlin from '../assets/Kotlin.png'
import react from '../assets/React.png'
import sql from '../assets/SQL.png'
import swift from '../assets/Swift.png'
import js from '../assets/JavaScript.png'
import ts from '../assets/Typescript.png'
import py from '../assets/Python.png'

const icons = [
    cpp,
    kotlin,
    react,
    sql,
    swift,
    js,
    ts,
    py
]

function Skills() {
  return (
    <Box 
        content = {
            <div className="horizontal-container carousel-track">
            {
                icons.concat(icons).map((src, i) => (
                    <div className="carousel-item" key={i}>
                    <img src={src} alt={`${src}`} />
                </div>))
            }
            </div>
        }
        className="skills"
    />
  );
}

export default Skills