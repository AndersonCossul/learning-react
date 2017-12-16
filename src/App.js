import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const actualState = this.state.showPersons
    this.setState({ showPersons: !actualState })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inhiret',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (<Person
              return name={person.name}
              age={person.age}
              click={this.switchNameHandler.bind(this, 'Anderson!')}
              changed={this.nameChangeHandler}/>
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
