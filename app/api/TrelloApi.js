import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = 'http://localhost:3500';
const API_HEADERS = {
    'Content-Type': 'application/json'
};

let TrelloAPI = {
    fetchCards() {
        fetch("${API_URL}/cards", { headers: API_HEADERS })
            .then((response) =>
                response.json())
    },
    addCard(card) {
        return fetch("${API_URL}/cards", {
                method: "POST",
                headers: API_HEADERS,
                body: JSON.stringify(card)
            })
            .then((response) => response.json());
    },
    addTask(cardId, task) {
        return fetch("${API_URL}/cards/${cardId}/tasks", {
                method: "POST",
                headers: API_HEADERS,
                body: JSON.stringify(trask)
            })
            .then((response) => response.json());
    }
};
export default TrelloAPI;