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
        CardActionCreators.fetchCards();
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