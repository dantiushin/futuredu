import { combineReducers } from 'redux';

import classesState from './slasses';
import signInUserState from './signInUser';

const rootReducer = combineReducers({
  classesState,
  signInUserState,
});

export default rootReducer;
