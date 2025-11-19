import Box from "./Box.jsx"
import Text from './Text.jsx';
import texts from "../assets/texts.json"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function Projects() {
  const navigate = useNavigate();

  const cards = texts.projects;
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);

  return (
    <section id="projects">
      <div className="horizontal-container">
        <div className="horizontal-small-gap-container">
          <Box content=
            {
              <div onClick={prev} style={{ width: "2em", display: "flex" }}>
                <FaCaretLeft style={{width:"100%", height:"100%"}}/>
              </div>
            }
            className="button"
          />
          <Box content=
            {
              <div onClick={next} style={{width: "2em", display: "flex" }}>
                <FaCaretRight style={{width:"100%", height:"100%"}}/>
              </div>
            }
            className="button"
          />
        </div>
        <Text children={cards[index]} />
        <Box content={
          <div onClick={() => navigate('/game')} style={{ padding: "0.2em"}}>
            Go to Project
          </div>}
          className="button"
          />
      </div>
    </section>
  );
}

export default Projects;