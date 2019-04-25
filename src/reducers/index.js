import { combineReducers } from 'redux';
import uncompleted from './uncompletedReducer';
import completed from './completedReducer';

export default combineReducers({
    uncompletedState: uncompleted,
    completedState: completed
});
