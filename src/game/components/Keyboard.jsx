import '../styles/KeyboardStyles.css';
function Keyboard({onKey, keyResults, layout}) {
  return (
    <div className='keyboard'>
      {layout.map((row, rowIndex) => (
        <div className='keyboard-row'>
          {
            row.map(key => 
              <button
              key={key}
              className={(key==='BACKSPACE' || key==='ENTER') ? 'special' : (keyResults[key] || '')}
              onClick={() => onKey(key)}
              >
                {key === 'BACKSPACE' ? 'BACK' : key}
              </button>
            )
          }
        </div>
      ))}
    </div>
  );
}

export default Keyboard;