## 버튼 컴포넌트 렌더링
### 피그마 시안
![image](https://github.com/summer787/Lion-Javascript/assets/90172574/f22a4355-7897-42ba-8a18-cff151f30fa4)

APP.jsx
```jsx

import'./App.css'
import '/src/styles/Button.css'
import Defaultbutton from './components/Defaultbutton'
import Disabledbutton from './components/Disabledbutton'


function App() {

  return (
    <div className='container'>
      
      <h2>First Components</h2>
     
      <Defaultbutton/>
    
      <Disabledbutton/>
     
    </div>
  )
}

export default App
```

Defaultbutton.jsx
```jsx
import '/src/styles/Button.css'

function Defaultbutton() {
  return (
    <div>
    <button className='default-button'>Button</button>
    </div>
  )
}

export default Defaultbutton
```

Disabledbutton.jsx
```
import '/src/styles/Button.css'


function Disabledbutton() {
  return (
    <div>
    <button className='disabled-button'>Button</button>
    </div>
  )
}

export default Disabledbutton
```

Button.css
```css

.default-button {
  width : 180px;
  height : 70px;
  background-color: #00C4EF;
  border: none;
  font-size: 35px;
  font-family: sans-serif;
  color:white;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
}

.disabled-button {
  width : 180px;
  height : 70px;
  background-color: #CEE0E4;
  border: none;
  font-size: 35px;
  font-family: sans-serif;
  color:white;
  display: flex;
  align-items: center;
}
```

### 화면에 렌더링
![image](https://github.com/summer787/react-homework/assets/90172574/e298f168-2b3c-4f96-ad48-c5b98f491c85)
