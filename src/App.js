import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Header from './components/header/header.component';

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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <Header title="Monster's Club"/>
        <SearchBox 
          placeholder='Search Monsters...' 
          handleChange={searchText => this.setState({ searchField: searchText.target.value })} 
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
