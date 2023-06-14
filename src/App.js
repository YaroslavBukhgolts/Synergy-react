import './App.css';
import {useState, useCallback, useEffect} from 'react';

function App() {
  const [num, setNum] = useState([1, 2]);
  const [color, setColor] = useState(false);

  const stylz = {
    color: color ? 'red' : 'black',
  }

  const getSumResult = useCallback(() => {
    console.log('Fetching');
    return [...num];
  }, [num]);

  return (
    <div className="App">
      <ul style={stylz}>
        <List getSumResult={getSumResult}/>
      </ul>
      <input type='button' value='Add' onClick={e => setNum([
          ...num, num[num.length -1] + 1]
        )}/>
      <input type='button' value='Change color' onClick={e => setColor(!color)}/>
    </div>
  );
}

const List = ({getSumResult}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(getSumResult());
  }, [getSumResult])

  return(
    list.map((i, id) => <li key={id}>{i}</li>)
  );
};

export default App;
