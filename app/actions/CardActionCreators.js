import AppDispatcher from '../AppDispatcher';
import constants from '../stores/constants';
import TrelloAPI from '../api/TrelloApi';
import CardStore from '../stores/CardStore';
import { throttle } from '../stores/utils';

let CardActionCreators = {

    fetchCards() {
        AppDispatcher.dispatchAsync(
            TrelloAPI.fetchCards(),
            {
                request: constants.FETCH_CARDS,
                success: constants.FETCH_CARDS_SUCCESS,
                failure: constants.FETCH_CARDS_ERROR
            })
    },

    addCard(card) {
        AppDispatcher.dispatchAsync(
            TrelloAPI.addCard(card),
            {
                request: constants.CREATE_CARD,
                success: constants.CREATE_CARD_SUCCESS,
                failure: constants.CREATE_CARD_ERROR
            }, { card })
    },

    updateCard(card, draftCard) {
        AppDispatcher.dispatchAsync(
            TrelloAPI.updateCard(card, draftCard),
            {
                request: constants.UPDATE_CARD,
                success: constants.UPDATE_CARD_SUCCESS,
                failure: constants.UPDATE_CARD_ERROR
            },
            { card, draftCard })
    },

    updateCardStatus: throttle((cardId, listId) => {
        AppDispatcher.dispatch({ type: constants.UPDATE_CARD_STATUS, payload: { cardId, listId } })
    }),

    updateCardPosition: throttle((cardId, afterId) => {
        AppDispatcher.dispatch({ type: constants.UPDATE_CARD_POSITION, payload: { cardId, afterId } })
    }, 500),

    persistCardDrag(cardProps) {
        let card = CardStore.getCard(cardProps.id);
        let cardIndex = CardStore.getCardIndex(cardProps.id);
        AppDispatcher.dispatchAsync(
            TrelloAPI.persistCardDrag(card.id, card.status, cardIndex),
            {
                request: constants.PERSIST_CARD_DRAG,
                success: constants.PERSIST_CARD_DRAG_SUCCESS,
                failure: constants.PERSIST_CARD_DRAG_ERROR
            },
            { cardProps}
        );
    }
};

export default CardActionCreators;