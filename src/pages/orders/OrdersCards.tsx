import React, { Fragment, Dispatch } from 'react';
import { Grid } from '@material-ui/core';
import Card from '../../shared/components/Card';
import { Order } from 'shared/interfaces/Order';
import { EmptyState } from 'shared/components/EmptyState';
import { Dictionary } from 'shared/interfaces/Dictionary';

interface Props {
  orders: Order[];
  isAdmin: boolean;
  type: number;
}
const empty = (type: number) => {
  let data: Dictionary = {};
  switch (type) {
    case 1:
      data = {
        title: 'Ordenes Terminadas',
        text:
          'Visualiza solamente las ordenes que han sido terminadas con un porcentaje de 100%',
      };
      break;
    case 2:
      data = {
        title: 'Ordenes en Progreso',
        text:
          'Visualiza solamente las ordenes que esten proceso tengan mas de 0% y menos de 100%',
      };
      break;
    default:
      data = {
        title: 'Ordenes',
        text: 'Visualiza todas las ordenes, sin importar sus estados',
      };
      break;
  }
  return data;
};
const OrdersCards = (props: Props) => {
  const { orders, isAdmin, type } = props;
  const emptyState = empty(type);
  return (
    <Fragment>
      {orders && orders.length === 0 && (
        <EmptyState
          title={emptyState.title}
          text={emptyState.text}
          link="/orders"
        />
      )}
      <Grid container direction="row" wrap="wrap">
        {orders &&
          orders.map((order: any, index: number) => (
            <Grid item key={index}>
              <Card isAdmin={isAdmin} product={false} itemOrder={order} />
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default OrdersCards;
