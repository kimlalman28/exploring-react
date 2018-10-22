import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      {id: 'j8dd', name: 'Kim', age: 22},
      {id: 'hur3', name: 'Jon', age: 24},
      {id: 'ola9', name: 'Max', age: 21}
    ],
    showPersons: false
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //spread op to copy array
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   //radium feature of pseudo-selectors
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // }

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return (
              <Person
                key={person.id} //key for react
                click={() => this.deletePersonHandler(index)} //delete person
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} //change name from input
              />
            )
          })}
        </div>
      );

      btnClass = classes.Red;

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) assignedClasses.push(classes.red);
    if(this.state.persons.length <= 1) assignedClasses.push(classes.bold);

    return (
      // Radium - used for media queries, keyframes, etc - wrap entire application
      //<StyleRoot>
        <div className={classes.App}>
          <h1>People</h1>
          <p className={assignedClasses.join(' ')}>People in Circle</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
