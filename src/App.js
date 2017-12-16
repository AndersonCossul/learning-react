import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Max', age: 28 },
      { id: 1, name: 'Manu', age: 29 },
      { id: 2, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
  
    // working with a copy, not reference
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}/>
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
