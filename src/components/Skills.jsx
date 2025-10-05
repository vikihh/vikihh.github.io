import Box from "./Box.jsx"
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
                <div className="carousel-box">
                    <div className="carousel-track">
                    {[...icons, ...icons].map((src, i) => (
                            <img key={i} src={src} alt="" className="carousel-icon" />
                    ))}
                    </div>
                </div>
            }
        />
    );
}

export default Skills