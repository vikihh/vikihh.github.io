import GitHubLogo from "../assets/logos/github.svg"
import LinkedInLogo from "../assets/logos/linkedin.svg"
import Box from "./Box.jsx"

function Social({ logo = 'github' }) {
  return (
    <Box content=
      {<img src={(logo == 'github') ? LinkedInLogo : GitHubLogo} alt="Logo" width="50" height="50" />}
      className={"button"} />
  );
}

export default Social