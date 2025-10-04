import GitHubLogo from "../assets/logos/github.svg"
import LinkedInLogo from "../assets/logos/linkedin.svg"
import Box from "./Box.jsx"

const links = {
  github: "https://github.com/vikihh/",
  linkedin: "https://www.linkedin.com/in/viktoriya-hristova-963946273/"
};

function Social({ logo = 'github' }) {
  return (
    <Box content=
      {
        <a href={links[logo]} target="_blank">
          <img src={(logo == 'linkedin') ? LinkedInLogo : GitHubLogo} alt="Logo" width="50" height="50" />
        </a>
      }
      className="button"
    />
  );
}

export default Social