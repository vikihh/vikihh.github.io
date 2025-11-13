import Box from "./Box.jsx"

function Picture({ photo }) {
  return (
    <div className='box picture'>
      <img src={photo} alt="Photo" />
    </div>
  );
}

export default Picture