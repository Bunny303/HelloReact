import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Cecka', age: 20 },
      { name: 'Petka', age: 30 }
    ]
  }

  swithNameHandler = () => {
    this.setState({persons: [
      { name: 'Max', age: 20 },
      { name: 'Petka', age: 30 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>It's working :)</p>
        <button onClick={this.swithNameHandler}>Click Me</button>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name} />
      </div>
    );
  }
}

export default App;
