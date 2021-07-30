import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home"
import "./App.css"
import Result from './component/Result';
import { Card } from 'react-bootstrap';


const App = () => {
  const [number, setNumber] = useState("")
console.log(number)
  const calculate = () => {
    try {
      setNumber(
       // eslint-disable-next-line
        eval(number)
      )
    } catch (error) {
      setNumber("error")
    }
  }

  const reset = () => {
    setNumber("")
  }

  const backSpace = () => {
    setNumber(
      number.slice(0, -1)
    )
  }

  const handleButton = (button) => {
    if (button === "="){
      calculate()
    }
    else if (button === "C"){
      reset()
    }
    else if (button === "CE"){
      backSpace()
    }
    else {
      setNumber(number + button)
    }
  }

  return (
    <>
      <h2 className="ml-5 mt-5">My simple calculator</h2>
    <Card style={{ width: '20.9rem' }} className="mt-5 ml-5 rounded">
      <Result number={number} />
      <Home number={number} handleButton={handleButton}/>
    </Card>
    </>
  )
}
export default App















































