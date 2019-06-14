import { DataActionsType } from './actions.name';

export const addOrder = (data: any) => ({
  type: DataActionsType.ADD_ORDER,
  payload: data,
});

export const sendProduct = (flag: boolean, id: number, order:string) => ({
  type: DataActionsType.SEND_PRODUCT,
  flag,
  id,
  order
});
