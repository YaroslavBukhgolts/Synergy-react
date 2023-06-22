import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className='pages_menu'>
          <NavLink to='/' style={isActive => ({
            color: isActive ? 'green' : null,
            })}>First block
          </NavLink>
          <NavLink to='/second' style={isActive => ({
            color: isActive ? 'green' : null,
            })}>Second block
          </NavLink>
        </div> 

        <div className='app_inner'>
          <Switch>
            <Route exact path='/'>
              <div className='first block'>
                <h1>First block</h1>
              </div>
            </Route>  

            <Route exact path='/second'>
              <div className='second block'>
                <h1>Second block</h1>
              </div>
            </Route>
          </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
