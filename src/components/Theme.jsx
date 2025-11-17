import SunIcon from "../assets/icons/sun.png"
import MoonIcon from "../assets/icons/moon.png"
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
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={SunIcon} alt="Change dark/light theme"/>
                        <img src={MoonIcon} alt="Change dark/light theme"/>
                    </div>
                    <div className={`toggle-box styled ${theme}`}></div>
                </div>
            }
            className="toggle" />
    );
}

export default Theme