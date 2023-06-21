import './App.css';
import {Form, Button} from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [state,setState] = useState('');
  const myRef = useRef(2);

  useEffect(() => {
    myRef.current = state;

  },[state]);

  return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" value={state} onChange={e => setState(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" value={myRef.current}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
}

export default App;