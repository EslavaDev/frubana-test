import { AuthActionsType } from './actions.name';

export interface AuthDataState {
  isAdmin: boolean;
  loading: boolean;
  error: string;
}

const token = localStorage.getItem('spa') || '';

const initialState: AuthDataState = {
  isAdmin: false,

  loading: false,
  error: '',
};

export default function authenticationReducer(
  state: AuthDataState = initialState,
  action: any,
): AuthDataState {
  switch (action.type) {
    case AuthActionsType.LOGIN: {
      return { ...state, loading: true };
    }
    case AuthActionsType.LOGIN_SUCCESS: {
      return { ...state, loading: false, isAdmin: action.payload };
    }

    case AuthActionsType.AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        isAdmin: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
