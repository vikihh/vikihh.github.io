import './Box.css'

function Box({ content, className = "" }) {
  return (
    <div className={`box styled ${className}`}>
      {content}
    </div>
  );
}

export default Box;