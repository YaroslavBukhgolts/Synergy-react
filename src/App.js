import './App.css';
import { Component } from 'react';
import Clicker from './components/clicker/clicker';

class App extends Component {

  render(){
    return (
      <div className='App'>
        <Clicker /> 
      </div>
    )
  }
}

export default App;