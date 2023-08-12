
import Defaultbutton from './Defaultbutton'

function Controller() {
  return (

    
    <div>
      <Defaultbutton
      label="기본 버튼"
      text="button"/>
  onClick={() => {
    document.querySelector('.button')
 }
}
    </div>

  )

}
export default Controller