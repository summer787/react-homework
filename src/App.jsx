
import'./App.css'
import '/src/styles/Button.css'
import Defaultbutton from './components/Defaultbutton'
import Disabledbutton from './components/Disabledbutton'


function App() {

  return (
    <div className='container'>
      
      <h2>First Components</h2>
      <p>Default button</p>
      <Defaultbutton/>
      <p>Disabled button</p>
      <Disabledbutton/>
     
    </div>
  )
}

export default App
