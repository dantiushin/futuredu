import { combineReducers } from 'redux';

import scheduleState from './schedule';
import signInUserState from './signInUser';

const rootReducer = combineReducers({
  scheduleState,
  signInUserState,
});

export default rootReducer;
