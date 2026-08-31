import keyboardRows from './keyboard.js';
import './WordleStyles.css';
function Keyboard({onKey}) {
  return (
    <div className='keyboard'>
      {keyboardRows.map((row, rowIndex) => (
        <div className='keyboard-row'>
          {
            row.map(key => 
              <button
                onClick={() => {onKey(key); console.log("here");}}
                className={key === 'ENTER' || key === 'BACKSPACE' ? 'special' : ''}>
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