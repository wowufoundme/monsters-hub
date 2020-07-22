import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends React.Component {

    constructor(props) {
        super();

        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }))
    }

    render() {

        const { monsters } = this.state;
        const { searchField } = this.props;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return(
            <div className='card-list'>
                {filteredMonsters.map(monster => (
                    <Card key={monster.id} monster={monster} />
                ))}
            </div>
        )
    }
}

export default CardList;