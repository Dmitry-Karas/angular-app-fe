import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  token: null,
};

const authReducer = createReducer(
  initialAuthState

  //   on(authActions.login, (state) => {})
);
