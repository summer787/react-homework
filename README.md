## 버튼 컴포넌트 과제 
### 피그마 시안
![image](https://github.com/summer787/Lion-Javascript/assets/90172574/f22a4355-7897-42ba-8a18-cff151f30fa4)
### [피그마 링크](https://www.figma.com/file/L4shUyhauTZArLv4KOetx8/Button-Component?type=design&node-id=1%3A3&mode=design&t=79cA07pixp40wHDl-1)

### APP.jsx
```jsx
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

```

### Defaultbutton.jsx
```jsx
import styles from '/src/styles/Button.module.css'

function Defaultbutton({ label, text }) {
  return (
   
    <div>
    <button className={styles.defaultbtn} aria-label={ label }>{ text }</button>
    </div>
  )
}

export default Defaultbutton
```

### Disabledbutton.jsx
```jsx
import styles from '/src/styles/Button.module.css'


function Disabledbutton({ label, text }) {
  return (
    <div>
    <button className={styles.disabledbtn} aria-label={ label }>{ text }</button>
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
![image](https://github.com/summer787/react-homework/assets/90172574/4edcfabb-da8c-402f-9a46-a5e08bd11f4a)

복습 후 계속 수정하겠습니다😭😢
