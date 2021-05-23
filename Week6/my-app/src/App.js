import './App.css'
import React, {useState} from 'react'

function App() {

const [showNum, setShowNum ] = useState(0)
const [num, setNum] = useState(0)
const [calc, setCalc] = useState()

const handleShowNum = (n) => {
  setShowNum(`${(showNum + n)}`)
}

const handleCalc = (x) => {
  setNum(showNum)
  setCalc(x)
}

const calculate = () => {
  setShowNum(eval(showNum))
}

const clearData = () => {
  setShowNum(0)
  setNum(0)
  setCalc()
}

  return (
    <div className="App">
      <h1>Do the Math</h1>
      <div id='display'>{showNum}</div>
      <div id='calculator'>

        <div className='num' onClick={() => handleShowNum(7)}>7</div>
        <div className='num' onClick={() => handleShowNum(8)}>8</div>
        <div className='num' onClick={() => handleShowNum(9)}>9</div>
        <div className='ops' onClick={() => handleShowNum('-')}>-</div>

        <div className='num' onClick={() => handleShowNum(4)}>4</div>
        <div className='num' onClick={() => handleShowNum(5)}>5</div>
        <div className='num' onClick={() => handleShowNum(6)}>6</div>
        <div className='ops' onClick={() => handleShowNum('+')}>+</div>

        <div className='num' onClick={() => handleShowNum(1)}>1</div>
        <div className='num' onClick={() => handleShowNum(2)}>2</div>
        <div className='num' onClick={() => handleShowNum(3)}>3</div>
        <div className='ops' onClick={() => handleShowNum('*')}>*</div>

        <div className='ops' onClick={() => clearData()}>Clear</div>
        <div className='num' onClick={() => handleShowNum(0)}>0</div>
        <div className='ops' onClick={() => calculate()}>Enter</div>
        <div className='ops' onClick={() => handleShowNum('/')}>/</div>
      </div>
    </div>
  );
}

export default App;
