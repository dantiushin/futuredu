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
} from '../common';

const initialState = {
  request: false,
  isSignInSuccess: false,
  isProfileUpdated: false,
  error: null,
  user: {
    displayName: '',
  },
  credential: null,
  infoAboutStudent: null,
};

export default function userState(state = initialState, action) {
  switch (action.type) {
    case GET_TOKENS_REQUEST:
      return {
        ...state,
        request: true,
        error: null,
      };
    case GET_TOKENS_SUCCESS:
      return {
        ...state,
        request: false,
        credential: action.credential,
      };
    case GET_TOKENS_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error,
      };
    case SIGNIN_AZURE_USER_REQUEST:
      return {
        ...state,
        request: true,
        error: null,
      };
    case SIGNIN_AZURE_USER_SUCCESS:
      return {
        ...state,
        request: false,
        isSignInSuccess: true,
        user: action.user,
      };
    case SIGNIN_AZURE_USER_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error,
      };
    case GET_INFO_ABOUT_STUDENT_REQUEST:
      return {
        ...state,
        request: true,
        error: null,
      };
    case GET_INFO_ABOUT_STUDENT_SUCCESS:
      return {
        ...state,
        request: false,
        infoAboutStudent: action.information.student,
      };
    case GET_INFO_ABOUT_STUDENT_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error,
      };
    default:
      return state;
  }
}
