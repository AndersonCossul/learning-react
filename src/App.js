import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working.</p>
        <Person name="Anderson" age="19"/>
        <Person name="Mr. Smith" age="29">
          My hobbies are: racing.
        </Person>
        <Person name="Mrs. Smith" age="25"/>
      </div>
    );
  }
}

export default App;
