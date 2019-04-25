import { FETCH_COMPLETEDTODOS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_COMPLETEDTODOS:
            return action.payload;
        default:
            return state;
    }
};

