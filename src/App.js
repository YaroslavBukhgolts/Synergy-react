import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
  }

  onClickButton = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  render () {
    let counter = this.state.counter;
    return (
      <div className="App">
        <p>You clicked {counter} times</p>
        <button onClick={() => {this.onClickButton()}}>Click me</button>
      </div>
    );
  }
}

export default App;
