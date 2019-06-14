import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getAuth } from 'store/auth/selectors';

const LoginRequiredRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/orders',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  isAdmin: getAuth(state),
});

export default connect(mapStateToProps)(LoginRequiredRoute);
