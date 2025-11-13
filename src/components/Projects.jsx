import Box from "./Box.jsx"
import Text from './Text.jsx';
import LeftArrow from "../assets/icons/left.png"
import RightArrow from "../assets/icons/right.png"
import texts from "../assets/texts.json"
import { useState } from "react";

function Projects() {
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
              <div className="arrow" onClick={prev}>
                <img src={LeftArrow} alt="Left" style={{ width: "2em", height: "2em", display: "flex" }} />
              </div>
            }
            className="button"
          />
          <Box content=
            {
              <div className="arrow" onClick={next}>
                <img src={RightArrow} alt="Right" style={{ width: "2em", height: "2em", display: "flex" }} />
              </div>
            }
            className="button"
          />
        </div>
        <Text children={cards[index]} />
      </div>
    </section>
  );
}

export default Projects;