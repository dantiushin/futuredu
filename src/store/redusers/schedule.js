import {
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS,
  GET_SCHEDULE_FAILURE,
  GET_SCHEDULE_ON_CURRENT_WEEK_REQUEST,
  GET_SCHEDULE_ON_CURRENT_WEEK_SUCCESS,
  GET_SCHEDULE_ON_CURRENT_WEEK_FAILURE,
} from '../common';

const initialState = {
  request: null,
  success: null,
  error: null,
  table: null,
};

export default function scheduleState(state = initialState, action) {
  switch (action.type) {
    case GET_SCHEDULE_REQUEST: {
      return {
        ...state,
        request: true,
      };
    }
    case GET_SCHEDULE_SUCCESS: {
      return {
        ...state,
        request: null,
        table: action.schedule,
      };
    }
    case GET_SCHEDULE_FAILURE: {
      return {
        ...state,
        request: null,
        error: action.error,
      };
    }
    case GET_SCHEDULE_ON_CURRENT_WEEK_REQUEST: {
      return {
        ...state,
        request: true,
      };
    }
    case GET_SCHEDULE_ON_CURRENT_WEEK_SUCCESS: {
      return {
        ...state,
        request: null,
        table: action.schedule,
      };
    }
    case GET_SCHEDULE_ON_CURRENT_WEEK_FAILURE: {
      return {
        ...state,
        request: null,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
