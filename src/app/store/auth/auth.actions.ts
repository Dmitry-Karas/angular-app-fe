import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ name: string; password: string }>()
);
export const logout = createAction('[Auth] Logout');
export const checkAuth = createAction('[Auth] CheckAuth');
