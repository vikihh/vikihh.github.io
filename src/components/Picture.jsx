import Box from "./Box.jsx"

function Picture({ photo }) {
  return (
    <Box
      content={<img src={photo} alt="Photo" />}
      className={'picture'}
    />
  );
}

export default Picture