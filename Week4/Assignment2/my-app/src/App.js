import React from "react";
import './App.css'

//HELP: changing state to new values
class App extends React.Component {
  constructor(){
    super()
    this.state= {
      firstName: '',
      lastName: '',
      email: '',
      placeOfBirth: '',
      phone: '',
      favFood: '',
      textArea: '',

      newName: []
      //where does [name] come into play?
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (e) => {
    e.preventDefault()

    const {name,value} = e.target
    this.setState({
    [name] : value    
  })
  }

  handleClick = (e) => {
    e.preventDefault()
    if(this.state.firstName.length > 2 
      && this.state.firstName.length > 2 
      && this.state.email.length > 2
      && this.state.placeOfBirth.length > 2
      && this.state.phone.length > 2
      && this.state.favFood.length > 2
      && this.state.textArea.length > 2) {
      const newName = [...this.state.newName];
      newName.push(this.state.firstName)                 //taking prior info into account
      newName.push(this.state.lastName)
      newName.push(this.state.email)
      newName.push(this.state.placeOfBirth)
      newName.push(this.state.phone)
      newName.push(this.state.favFood)
      newName.push(this.state.textArea)
  
  
      
      this.setState({newName})
    } 
  
  }

  render(){

    return (
      <div>
        <form>
          <div className="App">

          
            <div>
              <input name='firstName' onChange ={this.handleChange} style={{width : '87%'}} placeholder='First Name' value={this.state.firstName} required ></input>
            </div>
            <div >
              <input type='text' name='lastName' onChange ={this.handleChange} style={{width : '87%'}} placeholder='Last Name' value={this.state.lastName} required></input>
            </div>
            <div>
              <input name='email' onChange ={this.handleChange} style={{width : '87%'}} placeholder='Email'value={this.state.email} required></input>
            </div>

            <div>
              <input name='placeOfBirth' onChange ={this.handleChange} style={{width : '87%'}} placeholder='Place of Birth'value={this.state.placeOfBirth} required></input>
            </div>
            <div>
              <input type='number' name='phone' onChange ={this.handleChange} style={{width : '87%'}} placeholder='Phone'value={this.state.phone} required></input>
            </div>
            <div>
              <input name='favFood' onChange ={this.handleChange} style={{width : '87%'}} placeholder='Favorite Food'value={this.state.favFood} required></input>                    
            </div>
          
          <div className='span'></div>
            <textarea type='textarea' name='textArea' onChange ={this.handleChange} style={{width : '180%', marginLeft: '25px', marginTop : '30px'}} value={this.state.textArea} placeholder='Tell us about yourself' required></textarea>
          </div>
          <div className='span'>
            <button type='submit' name = 'submit' className='btn' onClick={this.handleClick}>Submit</button>
          </div>
        
        </form>
       <div id='container'>

        <div id='fname'>{this.state.newName[0]}</div>
        <div id='lname'>{this.state.newName[1]}</div>
        <div id='email'>{this.state.newName[2]}</div>
        <div id='birthplace'> {this.state.newName[3]}</div>
        <div id='phone'>{this.state.newName[4]}</div>
        <div id='favFood'>{this.state.newName[5]}</div>
        <div id='favFood'>{this.state.newName[6]}</div>
        

       </div>
       

      </div>
    );
  }
  }

export default App;
