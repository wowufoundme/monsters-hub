import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Header from './components/header/header.component';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      darkTheme: true,
      searchField : ''
    };
  }

  handleClick = () => {
    this.setState({ darkTheme: !this.state.darkTheme });
  }

  render() {
    const { searchField } = this.state;
    return (
      <div className={ this.state.darkTheme ? "App-dark" : "App-light" }>
        <Header title="Monster's Club" />
        <button className={ this.state.darkTheme ? "theme-button-light" : "theme-button-dark" } onClick={this.handleClick} >
          Switch to { this.state.darkTheme ? <span>Light</span> : <span>Dark</span> } Theme
        </button>
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
