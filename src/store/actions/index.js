import { createAction } from 'redux-actions';

import {
  SIGNIN_AZURE_USER_REQUEST
} from '../common';

export const signIn = createAction(SIGNIN_AZURE_USER_REQUEST);
