import { createAction } from 'redux-actions';

import {
  GET_TOKENS_REQUEST,
  SIGNIN_AZURE_USER_REQUEST,
  GET_INFO_ABOUT_STUDENT_REQUEST,
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_ON_CURRENT_WEEK_REQUEST,
} from '../common';

export const getTokens = createAction(GET_TOKENS_REQUEST);
export const signInAzure = createAction(SIGNIN_AZURE_USER_REQUEST);
export const getInfoAboutStudent = createAction(GET_INFO_ABOUT_STUDENT_REQUEST);
export const getSchedule = createAction(GET_SCHEDULE_REQUEST);
export const getScheduleOnCurrentWeek = createAction(GET_SCHEDULE_ON_CURRENT_WEEK_REQUEST);
