import AppDispatcher from '../AppDispatcher';
import constants from '../stores/constants';
import TrelloAPI from '../api/TrelloApi';

let TaskActionsCreators = {

    addTask(cardId, task) {
        AppDispatcher.dispatchAsync(TrelloAPI.addTask(cardId, task), {
            request: constants.CREATE_TASK,
            success: constants.CREATE_TASK_SUCCESS,
            failure: constants.CREATE_TASK_ERROR
        }, { cardId, task });
    }
}
export default TaskActionsCreators;