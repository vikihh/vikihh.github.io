import Square from "./Square.jsx";
function Row({ values, result, shake }) {
  function getClassName(value, result) {
    if (result === 'G') {
      return 'green';
    } else if (result === 'Y') {
      return 'yellow';
    } else if (result === 'X') {
      return 'gray';
    } else {
      return 'empty';
    }
  }

  return (
    <div className={`row ${shake ? 'shake' : ''}`}>
      {values.map((value, index) => (
        <Square
          key={index}
          value={value}
          className={getClassName(value, result[index])}
        />
      ))}
    </div>
  );
}
export default Row;