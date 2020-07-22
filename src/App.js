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
      searchField : ''
    };
  }

  render() {
    const { searchField } = this.state;
    return (
      <div className="App">
        <Header title="Monster's Club"/>
        <SearchBox 
          placeholder='Search Monsters...' 
          handleChange={searchText => this.setState({ searchField: searchText.target.value })} 
        />
        <CardList searchField={searchField}/>
      </div>
    );
  }
}

export default App;
