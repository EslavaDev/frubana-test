import { Dictionary } from "shared/interfaces/Dictionary";

export const getInitial = (state: Dictionary) => state.auth;

export const getAuth = (state: Dictionary) => getInitial(state)['isAdmin'];

export const getLoading = (state: Dictionary) => getInitial(state)['loading'];
