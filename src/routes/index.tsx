import React, { Suspense, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectetdRoute from './ProtectedRoute';
import ContentLoader from 'react-content-loader';

// Routes

const Orders = React.lazy(() => import('../pages/orders'));
const OrdersProgress = React.lazy(() => import('../pages/orderProgress'));
const OrdersReady = React.lazy(() => import('../pages/orderReady'));
const SwitchUser = React.lazy(() => import('../pages/switchUser'));
const Products = React.lazy(() => import('../pages/products'));

// tslint:disable-next-line:function-name
export default function AppRouter() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Switch>
        <Route path="/" exact component={Orders} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/orders/:id" exact component={Products} />
        <ProtectetdRoute
          path="/progressOrder"
          exact
          component={OrdersProgress}
        />
        <ProtectetdRoute path="/progressReady" exact component={OrdersReady} />
        <Route path="/switchUser" exact component={SwitchUser} />
      </Switch>
    </Suspense>
  );
}
