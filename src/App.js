import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {

  // Remember to put constructor in the class which holds the super function.
  constructor(props) {
    super();

    this.state = {
      monsters : [],
      searchField : ''
    };
  }

  // Gets executed every time the component is mounted. 
  // To check if state is updated use componentDidUpdate? function.
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input 
          type='search'
          placeholder='Search Monsters'
          className='search-bar'
          value={this.state.searchField}
          onChange={searchText => this.setState({ searchField: searchText.target.value })}
        />
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
