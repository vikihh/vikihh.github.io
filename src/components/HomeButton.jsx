import '../App.css'
import { FaHouse } from "react-icons/fa6";
import '../styles/HomeButton.css';

function HomeButton() {
  return (      
    <div className={"home-button"}>
    {
        <a href="#/">
        <FaHouse size={"1em"}/>
        </a>
    }
    </div>
  );
}

export default HomeButton;