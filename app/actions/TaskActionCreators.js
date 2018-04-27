import AppDispatcher from '../AppDispatcher';
import constants from '../stores/constants';
import TrelloAPI from '../api/TrelloApi';

let TaskActionCreators = {

    addTask(cardId, task) {
        AppDispatcher.dispatchAsync(
            TrelloAPI.addTask(cardId, task),
            {
                request: constants.CREATE_TASK,
                success: constants.CREATE_TASK_SUCCESS,
                failure: constants.CREATE_TASK_ERROR
            },
            { cardId, task }
            )
    },

    deleteTask(cardId, task, taskIndex) {
        AppDispatcher.dispatchAsync(
            TrelloAPI.deleteTask(cardId, task),
            {
                request: constants.DELETE_TASK,
                success: constants.DELETE_TASK_SUCCESS,
                failure: constants.DELETE_TASK_ERROR
            }, { cardId, task, taskIndex }
            )
    },

    toggleTask(cardId, task, taskIndex) {
        AppDispatcher.dispatchAsync(
            TrelloAPI.toggleTask(cardId, task),
            {
                request: constants.TOGGLE_TASK,
                success: constants.TOGGLE_TASK_SUCCESS,
                failure: constants.TOGGLE_TASK_ERROR
            }, { cardId, task, taskIndex }
            );
    }
};

export default TaskActionCreators;