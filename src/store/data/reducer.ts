import { DataActionsType } from './actions.name';

export interface AuthDataState {
  dataOrders: any[]
}

const initialState: AuthDataState = {
  dataOrders: []
};

export default function dataOrdersReducer(
  state: AuthDataState = initialState,
  action: any,
): AuthDataState {
  switch (action.type) {
    case DataActionsType.ADD_ORDER: {
      const {payload} = action;
      return { ...state, dataOrders: [...state.dataOrders, payload.order] };
    }
    case DataActionsType.SEND_PRODUCT: {
      const {flag, id, order} = action;
      const orders = state.dataOrders;
      let indexOrder = 0;
      const ordersTemp = orders.find((item:any, index: number)=>{
        if(item._id === order){
          indexOrder=index;
          return item;
        }
      })
      const counterOrder: number =ordersTemp.products.length;

      let counterFlag: number = 0;

      const product = {...ordersTemp.products[id], flag, counter: counterOrder}
      ordersTemp.products[id] = product
      ordersTemp.products.map((item:any) => {
        if(item.flag){
          counterFlag +=1
        }
      })

      let counterPercentageOrder: number = (counterFlag / counterOrder)*100

      orders[indexOrder] = {...ordersTemp, counter: counterOrder, percentage: Math.round(counterPercentageOrder)}
      return { ...state, dataOrders: [...orders]};
    }
    default:
      return state;
  }
}
