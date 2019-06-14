import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import currency from 'currency-formatter';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel,
  Hidden,
  Grid,
  Typography,
  Collapse,
} from '@material-ui/core';
import { getOrders } from 'store/data/selectors';
import { Dictionary } from 'shared/interfaces/Dictionary';

class OrderTable extends PureComponent<any, any> {
  render() {
    const { orders, id } = this.props;
    const orderData = orders
      .find((element: any) => element._id === id)
      ['products'].filter((element: any) => !element.flag);

    return (
      <Fragment>
        <Grid container>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="dense">Nombre</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="left">Precio Unitario</TableCell>
                <TableCell align="left">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderData.map((product: any, index: number) => {
                return (
                  <Fragment key={`row_${index}`}>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <strong>{product.name}</strong>
                      </TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                      <TableCell align="left">
                        {currency.format(product.price, { code: 'COP' })}
                      </TableCell>
                      <TableCell align="left">
                        {currency.format(product.total, { code: 'COP' })}
                      </TableCell>
                    </TableRow>
                  </Fragment>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: Dictionary) => ({
  orders: getOrders(state),
});

export default connect(mapStateToProps)(OrderTable);
