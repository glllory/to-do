// import { combineReducers } from 'redux';
// import data from './data';

import { combineReducers } from 'redux';
import uncompleted from './uncompletedReducer';
import completed from './completedReducer';

export default combineReducers({
    data: uncompleted,
    data1: completed
});



// export const rootReducer = combineReducers({
//     uncompleted: uncompletedReducer,
//     completed: completedReducer
// });
