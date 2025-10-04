import Box from "./Box.jsx"
import '../App.css'
import cpp from '../assets/skills/C++.png'
import kotlin from '../assets/skills/Kotlin.png'
import react from '../assets/skills/React.png'
import sql from '../assets/skills/SQL.png'
import swift from '../assets/skills/Swift.png'
import js from '../assets/skills/JavaScript.png'
import ts from '../assets/skills/Typescript.png'
import py from '../assets/skills/Python.png'

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
            content={
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