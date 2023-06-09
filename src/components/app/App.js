import Person from '../person/person';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {id: 1, name: 'Alvin', phone: '+1(111)111-11-11', career: 'IT', email: 'aaa@aaa.aa', meeting: 'dd.mm - hh:mm'},
        {id: 2, name: 'Mark', phone: '+2(222)222-22-22', career: 'Support', email: 'mmm@mmm.mm', meeting: 'dd.mm - hh:mm'},   
        {id: 3, name: 'Yar', phone: '+3(333)333-33-33', career: 'Marketing', email: 'yyy@yyy.yy', meeting: ''},
        {id: 4, name: 'Liya', phone: '+4(444)444-44-44', career: 'HR', email: 'lll@lll.ll', meeting: ''},
        
      ],
    }
  }

  // обновляем this.state meeting
  onValueChange = (id, value) => {
    this.setState(({data}) => {
      const item = data.find(item => item.id === id);
      const newItem = {...item, meeting: value};
      const index = data.indexOf(item);
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)];
      return {
        data: newData,
      }
    })  
  }

  render(){
    const {data} = this.state;
    const personList = data.map(item => {
      return <Person {...item} key={item.id} onValueChange = {(id, value) => this.onValueChange(id, value)}/>
    })

    return (
      <>
        <div className="App">
          <table className="responsive-table">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Career</th>
                  <th>Email</th>
                  <th>Meeting</th>
              </tr>
            </thead>
  
            <tbody>
              {personList}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
