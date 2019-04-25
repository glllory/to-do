import { FETCH_TODOS } from '../actions/types';
import { FETCH_COMPLETEDTODOS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return action.payload;
            break;
        case FETCH_COMPLETEDTODOS:
            return action.payload;
            break;
        default:
            return state;
    }
};