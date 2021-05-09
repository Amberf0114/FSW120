import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  handleChange= (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

    render() {
      return (
        <div>
          <form>
            List of Names: <input placeholder='Your Name Here' />
            <button onClick= { ()=> {
              let item = document.createElement('li')
              item.textContent = this.handleChange
            } }
              id='btn' >Add</button>
            <ol>
              <li>Kyle</li>
              <li>Sharkeisha Nohe</li>
              <li>Nahtu Daei</li>
            </ol>
          </form>
        </div>
      );
    }
  }


export default App;
