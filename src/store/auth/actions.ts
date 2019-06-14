import { AuthActionsType } from './actions.name';

export const logIn = (flag:boolean) => ({
  type: AuthActionsType.LOGIN,
  flag
});

export const logInSuccess = (payload:any) => ({
  type: AuthActionsType.LOGIN_SUCCESS,
  payload
});

// Handle auth errors
export const authError = (error: any) => ({
  type: AuthActionsType.AUTH_ERROR,
  payload: error,
});
