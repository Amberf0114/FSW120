import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      colors: ['white','white','white','white']
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (event)=> {
    let colors = [...this.state.colors]
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
            <div className='btnBoard'><button className='button' name='smallTime' onClick={this.handleClick}>Small Time DJ</button></div>
            <div className='btnBoard'><button className='button' name='party' onClick={this.handleClick}>Party DJ</button></div>
            <div className='btnBoard'><button className='button' name='professional0' onClick={this.handleClick}>Professional DJ I</button></div>
            <div className='btnBoard'><button className='button' name='professional1' onClick={this.handleClick}>Professional DJ II</button></div>
          </div>

          <div className='right-panel'>
            <div className='btnBoard'><button className='button' name='bigTime0' onClick={this.handleClick}>Big Time DJ I</button></div>
            <div className='btnBoard'><button className='button' name='bigTime1' onClick={this.handleClick}>Big Time DJ II</button></div>
            <div className='btnBoard'><button className='button' name='bigTime2' onClick={this.handleClick}>Big Time DJ III</button></div>
            <div className='btnBoard'><button className='button' name='bigTime3' onClick={this.handleClick}>Big Time DJ IV</button></div>
          </div>
        </div>
  
      </div>
    );
  }
}

export default App;
