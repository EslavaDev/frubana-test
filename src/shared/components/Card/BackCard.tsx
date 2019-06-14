import React, { useEffect, useState, useRef } from 'react';
import currency from 'currency-formatter'

import {
  Grid,
  Typography,
  withStyles,
  LinearProgress,
  Button,
  CardMedia,
} from '@material-ui/core';
import { styles } from './styles';
import { Order } from 'shared/interfaces/Order';
import { Product } from 'shared/interfaces/Product';
import { ModalDialog } from '../ModalDialog';
import { colors } from '../../../assets/styles';
import Banner from '../../../assets/images/banner.png';
import OrderTable from 'pages/orders/OrderTable';
interface Props {
  classes: any;
  order: Order;
  open: boolean;
  toggle: any;
}
const BackCard = (props: Props) => {
  const { classes, order, open, toggle } = props;
  let priceTotal = 0;
  const countTotal = order.products.reduce((prev: number, product: Product) => {
    priceTotal += product.total;
    return prev + product.quantity;
  }, 0);
  const percentage = order.percentage ? order.percentage : 0;
  let buffer = order.percentage ? order.percentage + 10 : 10;
  return (
    <React.Fragment>
      <CardMedia className={classes.imageBanner} image={Banner} />
      <ModalDialog
        title={'Productos Faltantes'}
        open={open}
        handleClose={() => toggle(false)}
      >
        <OrderTable id={order._id} />
      </ModalDialog>
      <Grid item>
        {percentage < 100 && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => toggle(true)}
          >
            {' '}
            Productos Faltantes
          </Button>
        )}
      </Grid>
      <Grid item>
        <Typography className={classes.textCard} align="left">
          <strong> Cantidad Total: </strong> {countTotal}
        </Typography>
        <Typography className={classes.textCard} align="left">
          <strong> Precio Total: </strong> {currency.format(priceTotal, {code: 'COP'})}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.textCard} align="left">
          <strong> Porcentaje Total: </strong>{' '}
          {order.percentage ? order.percentage : 0}%
        </Typography>
      </Grid>
      <Grid item>
        <LinearProgress
          color="primary"
          variant="buffer"
          value={order.percentage ? order.percentage : 0}
          valueBuffer={buffer}
        />
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(BackCard);
