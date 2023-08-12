
import'./App.css'
import '/src/styles/Button.module.css'
import Defaultbutton from './component/Defaultbutton'
import Disabledbutton from './component/Disabledbutton'


function App() {

  return (
    <div className='container'>
      
      <h2>First Component</h2>
     
      <Defaultbutton
      label="기본 버튼"
      text="button"/>
    
      <Disabledbutton
      label="사용 불가 버튼"
      text="button"/>
     
    </div>
  )
}

export default App
