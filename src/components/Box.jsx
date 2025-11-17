import '../styles/BoxStyles.css'
import '../styles/Button.css'
import '../styles/Carousel.css'
import '../styles/Toggle.css'
import '../styles/Picture.css'
import '../styles/Social.css'

function Box({ content, className = "" }) {
  return (
    <div className={`box styled ${className}`}>
      {content}
    </div>
  );
}

export default Box;