import React from "react";
import Die from './Die'

class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }

    handleChange(num) {
        this.setState(prevState => {
            const newNumbers = prevState(Math.floor(Math.random()*6))
        })
    }
    render(){
        // Math.floor(Math.random()*6)
       
        return(
            <div>
                {newNumbers}
               <button>Let's Roll!</button> 
            </div>
        )
    }
}

export default DiceBox