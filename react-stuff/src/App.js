import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      {name: 'Kim', age: 22},
      {name: 'Jon', age: 24},
      {name: 'Max', age: 21}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 22},
        {name: 'John', age: 24},
        {name: 'Max', age: 29}
      ]
    })
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {name: 'Kim', age: 22},
        {name: e.target.value, age: 24},
        {name: 'Max', age: 29}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Kimmy')}
            change={this.nameChangedHandler}
            >My Hobbies: Reading</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>People</h1>
        <button
          onClick={this.togglePersonsHandler}
          style={style}>Toggle Persons</button>
            {persons}
      </div>
    );
  }
}

export default App;
