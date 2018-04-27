import { Dispatcher } from 'flux';
import 'babel-polyfill';

export default class AppDispatcher extends Dispatcher {
    dispatchAsync(promise, types, payload) {
        const {request, success, failure} = types;
        this.dispatch({type: request, payload: Object.assign({}, payload)});
        promise.then(
            (response) => {
                this.dispatch({
                    type: success,
                    payload: Object.assign({}, payload)
                });
            },
            (error) => {
                this.dispatch({
                    type: failure,
                    payload: Object.assign({}, payload)
                })
            }
        );
    }
}