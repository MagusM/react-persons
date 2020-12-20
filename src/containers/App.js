import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/person';

class App extends Component {
  state = {
    persons: [
      {id: '12adf', name:"Simon", age:"36",  desc: "Father"},
      {id: '12agg', name:"Talia", age:"28",  desc: "Mother"},
      {id: '12ahh', name:"Noam",  age:"0.8", desc: "Son"}
    ],
    showPersonds: false
  }

  nameCHangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({persons: persons})
  }

  togglePersonsHandler = (event) => {
    this.setState({showPersonds: !this.state.showPersonds});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersonds) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person 
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  key={person.id}
                  changed={(event) => this.nameCHangeHandler(event, person.id)}
                />
              );
            })
          }
        </div>
      );
      btnClass = classes.Red;
    }

    const assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, Im a react app.</h1>
        <p className={assignClasses.join(' ')}>Hey, I'ts working!</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}
        >
            Toggle persons
        </button>

        {persons}

      </div>
    );
  }
}

export default App;









/** EXAMPLE OF REACT HOOK COMPONENT */
// import React, { Component, useState } from 'react';
//  const app = props => {
  // const [personsState, setPersonsState] = useState({
      // persons: [
        // {name:"Simon", age:"36",  desc: "Father"},
        // {name:"Talia", age:"28",  desc: "Mother"},
        // {name:"Noam",  age:"0.8", desc: "Son"}
      // ],
      // otherState: "some other value"
    // });

    // const switchNameHandler = () => {
      // setPersonsState({persons: [
        // {name: "Simon", age:"37",  desc: "Father"},
        // {name: "Talia", age:"29",  desc: "Mother"},
        // {name: "Noam",  age:"1", desc: "Son"}
      // ],
      // /*
      //  in hooks we have to manully make sure all state value are in object to be updated or use `useState` again.
      //  better to use `useState` for every state element we need, and manage them seperetly. 
      // */
      // otherState: personsState.otherState 
    // });
  // }

  //  return (
    // <div className="App">
      {/* <h1>Hi, I'm a react app.</h1> */}
      {/* <button onClick={switchNameHandler}>Switch Name</button> */}
      {/* <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person> */}
    {/* </div> */}
  //  );
//  }

//  export default app;