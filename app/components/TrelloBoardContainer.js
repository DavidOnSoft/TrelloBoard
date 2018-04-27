import React, { Component } from 'react';
import TrelloBoard from './TrelloBoard';
import { Container } from 'flux/utils';
import CardActionCreators from '../actions/CardActionCreators';
import CardStore from '../stores/CardStore';

class TrelloBoardContainer extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        const results = CardActionCreators.fetchCards();
        console.log('TrelloBoardContainer.componentDidMount()', results);
    }

    render() {
        return (<TrelloBoard cards={this.state.cards}/>);
    }

}
TrelloBoardContainer.getStores = () => ([CardStore]);
TrelloBoardContainer.calculateState = (prevState) => ({
    cards: CardStore.getState()
});
export default Container.create(TrelloBoardContainer);