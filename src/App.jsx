
import'./App.css'
import '/src/styles/Button.css'
import Defaultbutton from './component/Defaultbutton'
import Disabledbutton from './component/Disabledbutton'


function App() {

  return (
    <div className='container'>
      
      <h2>First Component</h2>
     
      <Defaultbutton/>
    
      <Disabledbutton/>
     
    </div>
  )
}

export default App
