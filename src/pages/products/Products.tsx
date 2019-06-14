import React, { PureComponent, Fragment, Dispatch } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import {  getProduct } from 'store/data/selectors';
import Card from '../../shared/components/Card';
import { Product } from 'shared/interfaces/Product';
import { sendProduct } from '../../store/data/actions';
import { getAuth } from 'store/auth/selectors';
import { Action } from 'shared/interfaces/Action';
import { Dictionary } from 'shared/interfaces/Dictionary';

interface Props {
  classes: any;
  orders: Product[];
  products: Product[];
  id: string;
  isAdmin: boolean;
  dispatch: Dispatch<Action>;
}
interface State {
  products: any;
}
class Products extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  static getDerivedStateFromProps(props: Props) {
    const { products } = props;

    if (products) {
      return { products };
    }
    return { products: [] };
  }

  componentDidUpdate = (prev: any) => {
    if (prev.products && this.state.products !== prev.products) {
      this.setState({ products: prev.products });
    }
  };
  render() {
    const { dispatch, id, isAdmin } = this.props;
    const { products: data } = this.state;
    return (
      <Fragment>
        <Grid container direction="row" wrap="wrap">
          {data &&
            data.products &&
            data.products.map((order: any, index: number) => (
              <Grid item key={`${data._id}-${index}`}>
                <Card
                  isAdmin={isAdmin}
                  product={true}
                  itemProduct={order}
                  sendProductTrue={() => dispatch(sendProduct(true, index, id))}
                  sendProductFalse={() =>
                    dispatch(sendProduct(false, index, id))
                  }
                />
              </Grid>
            ))}
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: Dictionary) => {
  const pathname = window.location.pathname;
  const pathnameSegment = pathname.split('/')[2];
  const id = pathnameSegment;
  return {
    id,
    isAdmin: getAuth(state),
    products: getProduct(state, id),
  };
};
export default connect(mapStateToProps)(Products);
