import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    enteredText: ''
  }

  handleInputTextChange = (event) => {
    this.setState({enteredText: event.target.value})
  }

  deleteChar = (charIndex) => {
    const chars = this.state.enteredText.split('')
    chars.splice(charIndex, 1)
    this.setState({enteredText: chars.join('')})
  }

  render() {
    const charList = this.state.enteredText.split('').map((char, index) => {
      return (
        <Char
          click={() => this.deleteChar(index)}
          char={char}
          key={index}/>
      )
    })

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleInputTextChange}
          value={this.state.enteredText} />
        <Validation enteredTextLength={this.state.enteredText.length}/>
        {charList}
      </div>
    )
  }
}

export default App;
