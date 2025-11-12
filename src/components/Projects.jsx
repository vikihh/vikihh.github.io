import Box from "./Box.jsx"
import LeftArrow from "../assets/icons/left.png"
import RightArrow from "../assets/icons/right.png"

function Projects() {
  return (
    <section id="projects">
      <div className="horizontal-container">
        <Box content={""}
          className="stretched" />
        <div className="horizontal-small-gap-container">
          <Box content=
            {
              <img src={LeftArrow} alt="Left" style={{ width: "3em", height: "auto" }} />
            }
            className="button"
          />
          <Box content=
            {
              <img src={RightArrow} alt="Right" style={{ width: "3em", height: "auto" }} />
            }
            className="button"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;