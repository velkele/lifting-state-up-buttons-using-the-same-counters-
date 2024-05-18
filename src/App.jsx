import { useState } from 'react'
import './App.css'
import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <>
      
        <MyButton count={count} onClick={handleClick}/>

        <MyButton count={count} onClick={handleClick}/>
        
    </>
  )
}

export default App
