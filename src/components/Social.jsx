import GitHubLogo from "../assets/logos/github.svg"
import LinkedInLogo from "../assets/logos/linkedin.svg"

const links = {
  github: "https://github.com/vikihh/",
  linkedin: "https://www.linkedin.com/in/viktoriya-hristova-963946273/"
};

function Social({ logo = 'github' }) {
  return (
    <div className={'box'}>
      {
        <a href={links[logo]} target="_blank">
          <img src={(logo == 'linkedin') ? LinkedInLogo : GitHubLogo} alt="Logo" style={{ width: "2em", height: "2em", display: "flex" }}/>
        </a>
      }
    </div>
  );
}

export default Social