import Box from "./Box.jsx"

function Projects() {
  return (
    <section id="projects">
      <Box content={
        <div>
          Project 1
        </div>
      } className="stretched name-of-project" />
    </section>
  );
}

export default Projects;