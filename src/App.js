import './App.css';
import {useEffect, useMemo, useState} from 'react';

const complexComputed = (e) => {
  console.log('Computing');
  let i = 0;
  while(i < 1000000000){
    i++;
  }
  return e * 2;
}

function App() {
  const [num, setNum] = useState(24);
  const [color, setColor] = useState(false);
  const stylz = useMemo(e => ({
    color: color ? 'red' : 'black',
  }), [color]);
  const compute = useMemo(e => complexComputed(num), [num]);
  useEffect(e => console.log('Styles changed'), [stylz]);

  return (
    <div className="App">
      <h1 style={stylz}>Сложные вычисления равны: {compute}</h1>
      <input type='button' value='increase' onClick={e => setNum(num + 1)}/>
      <input type='button' value='decrease' onClick={e => setNum(num - 1)}/>
      <input type='button' value='Change color' onClick={e => setColor(!color)}/> 
    </div>
  );
}

export default App;