import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = {
  github: "https://github.com/vikihh/",
  linkedin: "https://www.linkedin.com/in/viktoriya-hristova-963946273/"
};

function Icon( {logo} )
{
  console.log(logo);
  if (logo == 'linkedin') 
  { return (<FaLinkedin size={"2em"}/>)}
  return (<FaGithub size={"2em"}/>);
}

function Social({ logo = 'github' }) {
  console.log(logo);
  return (
    <div className={"box social-button"}>
      {
        <a href={links[logo]} target="_blank">
          {Icon({logo})}
        </a>
      }
    </div>
  );
}

export default Social