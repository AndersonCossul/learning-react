import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

class App extends Component {
	constructor(props) {
		super(props)
		console.log('[App.js] Inside Constructor', props);
		this.state = {
			persons: [
				{ id: 0, name: 'Max', age: 28 },
				{ id: 1, name: 'Manu', age: 29 },
				{ id: 2, name: 'Stephanie', age: 26 }
			],
			showPersons: false
		}
	}

	componentWillMount() {
		console.log('[App.js] Inside componentWillMount()')
	}

	componentDidMount() {
		console.log('[App.js] Inside componentDidMount()')
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
		return nextState.persons !== this.state.persons ||
			nextState.showPersons !== this.state.showPersons
}

componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
}

componentDidUpdate() {
		console.log('[UPDATE App.js] Inside componentDidUpdate')
}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id
		})

		// working with a copy, not reference
		const person = { ...this.state.persons[personIndex] }
		person.name = event.target.value

		const persons = [...this.state.persons]
		persons[personIndex] = person

		this.setState({ persons: persons })
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons]
		persons.splice(personIndex, 1)
		this.setState({ persons: persons })
	}

	togglePersonsHandler = () => {
		const actualState = this.state.showPersons
		this.setState({ showPersons: !actualState })
	}

	render() {
		console.log('[App.js] Inside render()')
		let persons = null

		if (this.state.showPersons) {
			persons = <Persons
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.nameChangedHandler} />
		}

		return (
			<div className={classes.App}>
				<button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
				<Cockpit
					appTitle={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}/>
				{persons}
			</div>
		);
	}
}

export default App;
