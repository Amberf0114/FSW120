import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Services from './Services'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className='navbar' />

        <div className='content'>
          <Switch>
 
            <Route exact path='/'><Home /></Route>
            <Route exact path='/About'><About /></Route>
            <Route exact path='/Services'><Services /></Route>

          </Switch>
        </div>

        <Footer className='footer' />
      </div>
    </Router>

  );
}

export default App;
