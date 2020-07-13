import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      monsters : [
        {
          name: 'Dracula',
          id: 'as1'
        },
        {
          name: 'Zombie',
          id: 'as2'
        }, 
        {
          name: 'Frankie',
          id: 'as3'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
          <h1 key={monster.id}>{ monster.name }</h1>
          ))}
      </div>
    );
  }
}

export default App;
