import './App.css'

function Box({ content, isButton = false }) {
  return (
    <div className= {isButton ? "box styled button" : "box styled stretched"}>
      {content}
    </div>
  );
}

export default Box;