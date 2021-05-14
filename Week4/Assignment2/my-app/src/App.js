import React from "react";
import './App.css'


class App extends React.Component {
  constructor(){
    super()
  }
  render(){

    return (
      <div>
        <form>
          <div className="App">

          
            <div>
              <input style={{width : '87%'}} placeholder='First Name'></input>
            </div>
            <div>
              <input style={{width : '87%'}} placeholder='Email'></input>
            </div>
            <div>
              <input style={{width : '87%'}} placeholder='Phone'></input>
            </div>

            <div>
              <input style={{width : '87%'}} placeholder='Last Name'></input>
            </div>
            <div>
              <input style={{width : '87%'}} placeholder='Place of Birth'></input>
            </div>
            <div>
              <input style={{width : '87%'}} placeholder='Favorite Food'></input>                    
            </div>
          
          <div className='span'></div>
            <textarea style={{width : '180%', marginLeft: '25px', marginTop : '30px'}}>Tell us about yourself</textarea>
          </div>
          <div className='span'>
            <button className='btn'>Submit</button>
          </div>
        
        </form>
       

      </div>
    );
  }
  }

export default App;
