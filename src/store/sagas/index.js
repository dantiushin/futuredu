import {
  takeLatest, call, put,
} from 'redux-saga/effects';
import Api from '../../api';

import {
  signInAzure,
  getInfoAboutStudent,
} from '../actions';

import {
  GET_TOKENS_REQUEST,
  GET_TOKENS_SUCCESS,
  GET_TOKENS_FAILURE,
  SIGNIN_AZURE_USER_REQUEST,
  SIGNIN_AZURE_USER_SUCCESS,
  SIGNIN_AZURE_USER_FAILURE,
  GET_INFO_ABOUT_STUDENT_REQUEST,
  GET_INFO_ABOUT_STUDENT_SUCCESS,
  GET_INFO_ABOUT_STUDENT_FAILURE,
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS,
  GET_SCHEDULE_FAILURE,
  GET_SCHEDULE_ON_CURRENT_WEEK_REQUEST,
  GET_SCHEDULE_ON_CURRENT_WEEK_SUCCESS,
  GET_SCHEDULE_ON_CURRENT_WEEK_FAILURE,
} from '../common';

function getTokensRequest(payload) {
  return Api.post('/auth/azure-oauth2/tokens', payload);
}

function signInAzureRequest(payload) {
  return Api.post('/auth/azure-oauth2/user', payload);
}

function getInfoAboutStudentRequest(payload) {
  return Api.get('/student/info', {
    params: { mail: payload.mail },
  });
}

function getScheduleRequest(payload) {
  return Api.get('/schedule', {
    params: { payload },
  });
}

function getScheduleCurrentWeekRequest(payload) {
  return Api.get(`/schedule/${payload.page}`, {
    params: { payload },
  });
}

function* getTokensWorkers(action) {
  try {
    const { data: credential } = yield call(getTokensRequest, action.payload);
    yield put({ type: GET_TOKENS_SUCCESS, credential });
    yield put(signInAzure(credential));
  } catch (error) {
    yield put({ type: GET_TOKENS_FAILURE, error });
  }
}

function* signInAzureWorker(action) {
  try {
    const { data: user } = yield call(signInAzureRequest, action.payload);
    yield put({ type: SIGNIN_AZURE_USER_SUCCESS, user });
    yield put(getInfoAboutStudent(user));
  } catch (error) {
    yield put({ type: SIGNIN_AZURE_USER_FAILURE, error });
  }
}

function* getInfoAboutStudentWorkers(action) {
  try {
    const { data: information } = yield call(getInfoAboutStudentRequest, action.payload);
    yield put({ type: GET_INFO_ABOUT_STUDENT_SUCCESS, information });
  } catch (error) {
    yield put({ type: GET_INFO_ABOUT_STUDENT_FAILURE, error });
  }
}

function* getScheduleWorkers(action) {
  try {
    const { data: schedule } = yield call(getScheduleRequest, action.payload);
    yield put({ type: GET_SCHEDULE_SUCCESS, schedule });
  } catch (error) {
    yield put({ type: GET_SCHEDULE_FAILURE, error });
  }
}

function* getScheduleCurrentWeekWorkers(action) {
  try {
    const { data: schedule } = yield call(getScheduleCurrentWeekRequest, action.payload);
    yield put({ type: GET_SCHEDULE_ON_CURRENT_WEEK_SUCCESS, schedule });
  } catch (error) {
    yield put({ type: GET_SCHEDULE_ON_CURRENT_WEEK_FAILURE, error });
  }
}

export default function* watcherSaga() {
  yield takeLatest(GET_TOKENS_REQUEST, getTokensWorkers);
  yield takeLatest(SIGNIN_AZURE_USER_REQUEST, signInAzureWorker);
  yield takeLatest(GET_INFO_ABOUT_STUDENT_REQUEST, getInfoAboutStudentWorkers);
  yield takeLatest(GET_SCHEDULE_REQUEST, getScheduleWorkers);
  yield takeLatest(GET_SCHEDULE_ON_CURRENT_WEEK_REQUEST, getScheduleCurrentWeekWorkers);
}
