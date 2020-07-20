import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  // Remember to put constructor in the class which holds the super function.
  constructor(props) {
    super();

    this.state = {
      monsters : []
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
        <SearchBox />
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
