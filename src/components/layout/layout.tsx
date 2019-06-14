import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppRouter from '../../routes';
import { styles } from './styles';
import imageEmpty from '../../assets/images/userpicture.jpg';
import logo from '../../assets/images/frubana-logo.png';
import { Menu } from '../menu';
import { ToggleDrawer } from '../../store/sidenav/actions';
import { getAuth } from 'store/auth/selectors';
import { logIn } from 'store/auth/actions';
import { getOrders } from 'store/data/selectors';
import { Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Dictionary } from 'shared/interfaces/Dictionary';
import { getDrawer, getToolBar } from 'store/sidenav/selectors';

class Layout extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      avatar: imageEmpty,
      mobileOpen: false,
      translations: {},
      lang: 'en',
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const {
      classes,
      dispatch,
      toolbarOpened,
      open,
      isAdmin,
      ordersLength,
    } = this.props;
    const { avatar } = this.state;
    const thereAreTranslations = true;

    return (
      <Router>
        {!thereAreTranslations && (
          <div className={classes.cntLoader}>
            <CircularProgress
              thickness={4}
              size={50}
              className={classes.mainLoader}
              color="primary"
            />
          </div>
        )}
        {thereAreTranslations && (
          <div className={classes.root}>
            {toolbarOpened && (
              <>
                <AppBar
                  position="fixed"
                  color="default"
                  className={classes.appBar}
                  elevation={0}
                >
                  <Toolbar
                    className={open ? classes.toolbar : classes.toolbarFake2}
                  >
                    <div className={`${classes.menuIconFather}`}>
                      <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={() => dispatch(ToggleDrawer())}
                        className={classes.menuButton}
                      >
                        <MenuIcon className={classes.menuIcon} />
                      </IconButton>
                      <Link to="/">
                        <img src={logo} className={classes.logo} />
                      </Link>
                    </div>


                    <Link to="/orders" style={{ textDecoration: 'none' }}>
                      <Typography variant="h3" style={{ color: 'white' }}>
                        {ordersLength} ORDENES
                      </Typography>
                    </Link>
                  </Toolbar>
                </AppBar>
                <Menu />
              </>
            )}
            <main className={classes.content}>
              {toolbarOpened && <div className={classes.toolbarFake} />}
              <AppRouter />
            </main>
          </div>
        )}
      </Router>
    );
  }
}

const mapStateToProps = (state: Dictionary) => ({
  open: getDrawer(state),
  toolbarOpened: getToolBar(state),
  isAdmin: getAuth(state),
  ordersLength: getOrders(state).length,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(Layout);
