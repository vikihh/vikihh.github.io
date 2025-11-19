import { FiMoon, FiSun } from "react-icons/fi";
import Box from "./Box.jsx"
import { useState, useEffect } from "react"

function Theme() {

    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved;
        return (window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Box content=
            {
                <div className="toggle-vertical"
                    onClick={() => setTheme(theme === 'light' ? "dark" : "light")}>
                        <FiMoon style={{width:"100%", height:"25%"}}/>
                        <FiSun style={{width:"100%", height:"25%"}}/>
                        <div className={`toggle-box ${theme}`}></div>
                </div>
            }
            className="toggle" />
    );
}

export default Theme