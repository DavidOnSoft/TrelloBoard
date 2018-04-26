import AppDispatcher from '../AppDispatcher';
import constants from '../stores/constants';
import TrelloAPI from '../api/TrelloApi';
import CardStore from '../stores/CardStore';

let CardActionsCreators = {
    fetchCards() {
        AppDispatcher.dispatchAsync(TrelloAPI.fetchCards(), {
            request: constants.FETCH_CARD,
            success: constants.FETCH_CARD_SUCCESS,
            failure: constants.FETCH_CARD_ERROR
        });
    }
    addCard(card) {
        AppDispatcher.dispatchAsync(TrelloAPI.addCard(card), {
                request: constants.CREATE_CARD,
                success: constants.CREATE_CARD_SUCCESS,
                failure: constants.CREATE_CARD_ERROR
            }, { card }
        };
    }
};
export default CardActionsCreators;