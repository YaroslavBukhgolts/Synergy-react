import './App.css';
import { Component } from 'react';
import Clicker from './components/clicker/clicker';
import Framework from './components/framework/framework';
import './components/framework/framework.scss';
import ExampleState from './components/exampleState/exampleState';

class App extends Component {

  render(){
    return (
      <div className='App'>
        <Clicker />
        <h1>Example button</h1>
        <Framework /> 
        <ExampleState />
      </div>
    )
  }
}

export default App;