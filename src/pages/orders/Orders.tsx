import React, { PureComponent, Fragment, Dispatch } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { getOrders } from 'store/data/selectors';
import { getAuth } from 'store/auth/selectors';
import { Order } from 'shared/interfaces/Order';
import { Action } from 'shared/interfaces/Action';
import OrdersCards from './OrdersCards';
import SearchBox from 'shared/components/Searchbox/Searchbox';
import { sortAscArray } from 'shared/utils/arrayOperators';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { styles } from './styles';
import { Dictionary } from 'shared/interfaces/Dictionary';

interface Props {
  orders: Order[];
  type?: number;
  classes?: any;
  dispatch: Dispatch<Action>;
  isAdmin: boolean;
}
interface State {
  search: string;
  ordersData: Order[] | any;
  orderBy: string;
  order: string;
}
class Orders extends PureComponent<Props, State> {
  state = {
    search: '',
    ordersData: [],
    orderBy: 'percentage',
    order: 'desc' as 'desc',
  };

  componentDidMount = () => {
    this.type();
  };

  type = (order: any = null, search: string = '') => {
    const { orders, type } = this.props;
    const uri = order ? order : orders;
    let data;
    switch (type) {
      case 1:
        data = uri.filter(
          (item: Order) => item.percentage && item.percentage === 100,
        );
        break;
      case 2:
        data = uri.filter(
          (item: Order) => item.percentage && item.percentage < 100,
        );
        break;
      case 3:
        data = uri.filter(
          (item: Order) =>
            !item.percentage || (item.percentage && item.percentage === 0),
        );
        break;
      default:
        data = uri;
        break;
    }
    return this.transformData(data, search);
  };

  componentWillReceiveProps = (prev: any) => {
    if (this.state.ordersData !== prev.orders) {
      this.type(prev.orders);
    }
  };

  transformData = (order: any = null, search?: string) => {
    const { orderBy, order: orderAsc } = this.state;
    const uri = order ? order : this.props.orders;

    let ordersFiltered = uri.slice();
    if (search) {
      ordersFiltered = uri.filter(
        (orderItem: Order) =>
          orderItem.region_code &&
          orderItem.region_code.toLowerCase().includes(search.toLowerCase()),
      );
    }
    const productsTransformed = ordersFiltered.map((product: any) => ({
      ...product,
    }));
    const dataSorted = sortAscArray(productsTransformed, orderBy);
    if (orderAsc !== 'desc') {
      dataSorted.reverse();
    }
    this.setState({ ordersData: [...dataSorted] });
  };

  filterByName = (value: string | null) => {
    const search = value || '';
    this.setState({ search }, () => this.type(null, search));
  };

  handleSort(key: string) {
    const order = this.state.order === 'desc' ? 'asc' : 'desc';
    this.setState({ order, orderBy: key }, () =>
      this.type(null, this.state.search),
    );
  }

  icon = (key: string) => {
    const { classes } = this.props;
    const { orderBy, order } = this.state;
    const up_down = order === 'desc' ? true : false;

    let iconArrow: any = '';

    if (orderBy === key) {
      iconArrow = up_down ? (
        <ArrowDownward className={classes.arrowIcon} />
      ) : (
        <ArrowUpward className={classes.arrowIcon} />
      );
    }
    return iconArrow;
  };

  render() {
    const { type, isAdmin, classes } = this.props;
    const { ordersData } = this.state;
    const typeTemp = type ? type : 0;
    return (
      <Fragment>
        <Grid
          container
          direction="column"
          justify="center"
          className="padding-0"
        >
          <Grid item>
            {isAdmin && (
              <Fragment>
                <SearchBox handleChange={this.filterByName} />
                <Grid
                  container
                  direction="row"
                  className={`padding-0 ${classes.ctnFilter}`}
                >
                  <Grid item xs={4} md={4} className={classes.ctnFilter}>
                    {this.icon('percentage')}
                    <Button
                      className={classes.buttonsFilter}
                      onClick={() => this.handleSort('percentage')}
                    >
                      Porcentaje
                    </Button>
                  </Grid>
                  <Grid item xs={4} md={4} className={classes.ctnFilter}>
                    {this.icon('routeId')}
                    <Button
                      className={classes.buttonsFilter}
                      onClick={() => this.handleSort('routeId')}
                    >
                      Ruta
                    </Button>
                  </Grid>
                  <Grid item xs={4} md={4} className={classes.ctnFilter}>
                    {this.icon('slot')}
                    <Button
                      className={classes.buttonsFilter}
                      onClick={() => this.handleSort('slot')}
                    >
                      Horario
                    </Button>
                  </Grid>
                </Grid>
              </Fragment>
            )}
          </Grid>
          <Grid item>
            {ordersData && (
              <OrdersCards
                isAdmin={isAdmin}
                orders={ordersData}
                type={typeTemp}
              />
            )}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: Dictionary) => ({
  orders: getOrders(state),
  isAdmin: getAuth(state),
});
export default withStyles(styles)(connect(mapStateToProps)(Orders));
