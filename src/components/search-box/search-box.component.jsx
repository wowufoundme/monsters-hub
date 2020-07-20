import React from 'react';
import './search-box.styles.css';

class SearchBox extends React.Component {
    constructor(props) {
        super();

        this.state = {
            searchField : ''
        }
    }

    render() {
        return(
            <div className='search-container'>
                <input 
                    type='search'
                    placeholder='Search Monsters'
                    className='search-bar'
                    value={this.state.searchField}
                    onChange={searchText => this.setState({ searchField: searchText.target.value })}
                />
            </div>
        )
    }
}

export default SearchBox;