
import buttonDefault from '/src/assets/Button-default.png'
import buttonHover from '/src/assets/Button-hover.png'


function Button() {
  

  return (
    <div>
    <p>default-button</p>
    <img src={buttonDefault} className="default-button" alt="default button" />
    <p>hover-button</p>
    <img src={buttonHover} className="default-button" alt="default button" />
    </div>
    )

}

export default Button