import { Dictionary } from 'shared/interfaces/Dictionary';

export const getInitial = (state: Dictionary) => state.sidenav;

export const getDrawer = (state: Dictionary) => getInitial(state)['open'];
export const getToolBar= (state: Dictionary) => getInitial(state)['toolbarOpened'];

