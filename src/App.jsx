
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'


function App() {
const [value, setValue] = useState([])
useEffect(()=>{
  fetch('../public/Data.json')
  .then(res=>res.json())
  .then(data=> setValue(data))
},[])

const handleButtonClick = data =>{
  console.log(data)
}

  return (
    <>
    <h1> Data : {value.length}</h1>
     <Header value={value} handleButtonClick={handleButtonClick} ></Header>
    </>
  )
}

export default App
