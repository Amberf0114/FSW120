import React from "react";
import Die from './Die'
import './Dicebox.css'

class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
            selected: [false, false, false, false, false],
            rounds: 0
        }
    }

    selected = (e) => {
        let selected = [...this.state.selected]
        switch(e){
            case "0":
                selected[0] = true
                this.setState({selected})
                break;

            case "1":
                selected[1] = true
                this.setState({selected})
                break;
        }
    };

    roll = () => {
        if(this.state.rounds < 3) {
            let die1 = [this.state.num1]
            let die2 = [this.state.num2]
            let die3 = [this.state.num3]
            let die4 = [this.state.num4]
            let die5 = [this.state.num5]
            if (!this.state.selected[0]) {die1 = (Math.floor(Math.random()*6))}
            if (!this.state.selected[1]) {die2 = (Math.floor(Math.random()*6))}
            if (!this.state.selected[2]) {die3 = (Math.floor(Math.random()*6))}
            if (!this.state.selected[3]) {die4 = (Math.floor(Math.random()*6))}
            if (!this.state.selected[4]) {die5 = (Math.floor(Math.random()*6))}
            this.setState(() => {
                return({
                    num1: die1, 
                    num2: die2, 
                    num3: die3, 
                    num4: die4, 
                    num5: die5,
                    rounds: this.state.rounds +1
                })
            })
        }

    }

    reset = () => {
        this.setState(()=> {
            return({
                num1: 0, 
                num2: 0, 
                num3: 0, 
                num4: 0, 
                num5: 0,
                selected: [false, false, false, false, false],
                rounds: 0
            })
        })
    }


    render(){
       
        return(
            <div className='master-container'>
                <div className='numbers'>
                    <Die num= {this.state.num1} id='1' selected= {this.selected}/>
                    <Die num= {this.state.num2} id='2' selected= {this.selected}/>
                    <Die num= {this.state.num3} id='3' selected= {this.selected} />
                    <Die num= {this.state.num4} id='4' selected= {this.selected} />
                    <Die num= {this.state.num5} id='5' selected= {this.selected} />
                </div> 
               
                <div className='button-container'>
                    <button onClick={()=> this.roll()}>Let's Roll!</button> 
                    <button onClick={()=> this.reset()}>Next Round</button>
                </div>
            </div>
        )
        }
}

export default DiceBox