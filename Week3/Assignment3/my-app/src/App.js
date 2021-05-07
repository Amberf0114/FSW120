import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      colors: ['white','white','white','white']
    }
  }

  handleClickSmall = ()=> {
    let setColors 
    this.setState(prevState => {
      if(prevState.colors[0]!=="white"){
        setColors = ['white','white','white','white' ]
      }
      else if (prevState.colors[0]=='white'){
        setColors = ['black','black','black','black' ]
      }
      return {
        colors: setColors
      }
    })
  }

handleClickParty = ()=> {
  let setColors
  this.setState((prevState) => {
    setColors = ['purple', 'purple', prevState.colors[2], prevState.colors[3]]
    return {
      colors: setColors
    }
  }) 
}

handleClickProLeft = () => {
//this one has colors as an object so setColors is not necessary
  this.setState((prevState) => ({
    colors : [prevState.colors[0], prevState.colors[1], 'blue', prevState.colors[3]]
  }))
}

handleClickProRight = () => {
  //this one has colors as an object so setColors is not necessary
  //return also is not necessary
    this.setState((prevState) => ({
      colors : [prevState.colors[0], prevState.colors[1], prevState.colors[2], 'blue']
    }))
  }

  handleClick0 = () => {
    this.setState((prevState) => ({
      colors : ['red', 'white', 'white', 'red']
    }))
  }

  handleClick1 = () => {
    this.setState((prevState) => ({
      colors : ['white', 'red', 'red', 'white']
    }))
  }

  handleClick2 = () => {
    this.setState((prevState) => ({
      colors : ['black', 'white', 'white', 'black']
    }))
  }
  handleClick3 = () => {
    this.setState((prevState) => ({
      colors : ['red', 'black', 'black', 'red']

    }))
  }

  render(){

    return (
      <div className="App">
  
        <div className='container0'>
          <div className='colorBoard'style={{backgroundColor:this.state.colors[0]}}>SHAZAM!</div>
          <div className='colorBoard'style={{backgroundColor:this.state.colors[1]}}>Doo-Wap!</div>
          <div className='colorBoard'style={{backgroundColor:this.state.colors[2]}}>KA-Chow!</div>
          <div className='colorBoard'style={{backgroundColor:this.state.colors[3]}}>Ding-Dong!</div>
        </div>
  
        <div  className='container1'>

          <div className='left-panel'>
            <div className='btnBoard'><button className='button' name='smallTime' onClick={this.handleClickSmall}>Small Time DJ</button></div>
            <div className='btnBoard'><button className='button' name='party' onClick={this.handleClickParty}>Party DJ</button></div>
            <div className='btnBoard'><button className='button' name='professional0' onClick={this.handleClickProLeft}>Professional DJ I</button></div>
            <div className='btnBoard'><button className='button' name='professional1' onClick={this.handleClickProRight}>Professional DJ II</button></div>
          </div>

          <div className='right-panel'>
            <div className='btnBoard'><button className='button' name='bigTime0' onClick={this.handleClick0}>Big Time DJ I</button></div>
            <div className='btnBoard'><button className='button' name='bigTime1' onClick={this.handleClick1}>Big Time DJ II</button></div>
            <div className='btnBoard'><button className='button' name='bigTime2' onClick={this.handleClick2}>Big Time DJ III</button></div>
            <div className='btnBoard'><button className='button' name='bigTime3' onClick={this.handleClick3}>Big Time DJ IV</button></div>
          </div>
        </div>
  
      </div>
    );
  }
}

export default App;
