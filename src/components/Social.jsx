import GitHubLogo from "../assets/icons/github_logo.png"
import LinkedInLogo from "../assets/icons/linkedin.svg"

const links = {
  github: "https://github.com/vikihh/",
  linkedin: "https://www.linkedin.com/in/viktoriya-hristova-963946273/"
};

function Social({ logo = 'github' }) {
  return (
    <div className={"box social-button"}>
      {
        <a href={links[logo]} target="_blank">
          <img src={(logo == 'linkedin') ? LinkedInLogo : GitHubLogo} alt="Logo"/>
        </a>
      }
    </div>
  );
}

export default Social