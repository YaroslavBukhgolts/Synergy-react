import { Component } from 'react';
import './clicker.css';
import styled from 'styled-components';

class Clicker extends Component {
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
    const Button = styled.button`
      display: inline-block;
      border-radius: 3px;
      padding: 0.5rem 0;
      margin: 0.5rem 1rem;
      width: 11rem;
      background: orange;
      color: white;
      border: 2px solid white;
      cursor: pointer;
    `
    const TomatoButton = styled(Button)`
      color: black;
      border-color: tomato;
      background: green;
    `;
    return (
      <div className="Clicker">
        <p>You clicked {counter} times</p>
        <button onClick={() => {this.onClickButton()}}>Click me</button>
        <Button>Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
      </div>
    );
  }
}

export default Clicker;
