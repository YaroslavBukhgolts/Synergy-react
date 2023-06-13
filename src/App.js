import { useState, useEffect } from 'react';
import './App.css';

function App(props) {

  // useState
  const [state, setState] = useState(props.counter);
  const [test, setTest] = useState(0);

  // Используем useEffect и меняем title страницы
  useEffect(() => {
    document.title = `Ваше число ${state}`;
    console.log('Change');
  }, [state]);
  
  // Функция меняет counter
  const onChangeCounter = (e) => {
    setState(state => state + e);
  }

  // Функция сбрасывает значение counter
  const onResetCounter = () => {
    setState(props.counter);
  }

  // Функция генерирует случайное число
  const onRandomCounter = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    setState(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return (
    <div className="App">
      <div className="counter">{state}</div>
      <div className="controls">
        <button onClick={() => {onChangeCounter(1)}}>INC</button>
        <button onClick={() => {onChangeCounter(-1)}}>DEC</button>
        <button onClick={() => {onResetCounter()}}>RESET</button>
        <button onClick={() => {onRandomCounter(-50, 50)}}>RND</button>
      </div>
    </div>
  );
}

export default App;
