import React from 'react';
import './App.css'
import MyList from './MyList'


//HELP: getting name to display as addtional <ol> item
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: ['Kyle', 'Sharkeisha Nohe', 'Nahtu Daei'],
      newName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange= (e)=> {
    e.preventDefault()

    const {name, value} = e.target   //parameters?
    
    this.setState({
      [name]: value   
    })
  }

  handleClick = (e) => {
    e.preventDefault()

    this.setState({
      name : this.state.name.concat(this.state.newName)    //.concat
    // name:this.state.newName
    })
  }


    render() {
      return (
        <div id='container'>
          <form>
            List of Names: <input name= 'newName' placeholder='Your Name Here' onChange={this.handleChange} value={this.state.newName}/>
            <button id='btn' onClick={this.handleClick}>Add</button>
              <h1>{this.state.newName}</h1>
          </form>
          {/* <h1>{this.state.name}</h1> */}
          <MyList items = {this.state.name}  />
        </div>
      );
    }
  }


export default App;



            
            //for (i=0; i< name.length; i++) {
            //   let item = document.createElement('li')
            //   item.textContent = this.handleChange  
            //}
                 
                         //***OR/

            // { ()=> {
            //   let item = document.createElement('li')
            //   item.textContent = this.handleChange
            // } }