import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import Foot from './Foot'
import Login from './Login'
import BlogPost from './BlogPost'
import './App.css';


function App() {
  return (
    <Router>
        <div className="App">
          <Nav/>
                
            <div>
              <Switch>

                <Route exact path='/'><Login/></Route>
                <Route exact path='/abcdefgsecure'><BlogPost/></Route>

              </Switch> 
            </div>
              
          <Foot/>
        </div>
    </Router>
   
  );
}

export default App;
