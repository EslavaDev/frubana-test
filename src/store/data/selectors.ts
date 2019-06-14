import { array } from 'prop-types';
import { Dictionary } from 'shared/interfaces/Dictionary';

export const getInitial = (state: Dictionary) => state.orders;

export const getOrders = (state: Dictionary) => getInitial(state)['dataOrders'];

export const getProduct = (state: Dictionary, id: string) => {
  const products = getOrders(state);
  let productFind: any[] = [];
  if (products) {
    productFind = products.find((element: any) => element._id === id);
  }
  return productFind;
};

export const getProductMissing = (state: Dictionary, id: string) => {
  const products = getProduct(state, id).filter((item: any) => item.flag);
  return {
    products,
    count: products.length,
  };
};
