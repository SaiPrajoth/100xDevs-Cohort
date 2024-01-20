import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  return (
    <>
    <CustomButton count={count} setCount={setCount}></CustomButton>
    </>
  )
}

function CustomButton(props){
  return(
    // eslint-disable-next-line react/prop-types
    <button onClick={()=>{props.setCount(props.count+1)}}>counter{props.count}</button>
  )
}

export default App
