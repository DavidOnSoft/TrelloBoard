import AppDispatcher from '../AppDispatcher';
import constants from '../stores/constants';
import { ReduceStore } from 'flux/utils';

class CardStore extends ReduceStore {
    getInitialState() {
        return [];
    }
    getCard(id) {
        return this.state.find((card) => card.id == id);
    }
    getCardIndex(id) {
        return this.state.findIndex((card) => card.id == id);
    }
    reduce(state, action) {
        switch (action.type) {
            case constants.FETCH_CARDS_SUCCESS:
                return action.payload.response;
            case constants.CREATE_CARD:
                return update(this.getState(), { $push: [action.payload.card] });
            case constants.CREATE_CARD_SUCCESS:
                cardIndex = this.getCardIndex(action.payload.card.id);
                return update(this.getState(), {
                    [cardIndex]: {
                        id: { $set: action.payload.response.id }
                    }
                });
            case constants.CREATE_CARD_ERROR:
                cardIndex = this.getCardIndex(action.payload.card.id);
                return update(this.getState(), { $splice: [cardIndex, 1] });
            default:
                return state;
        }
    }
}
export default new CardStore(AppDispatcher);