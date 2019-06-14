import React, { PureComponent } from 'react';
import { NavLink, matchPath, withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { styles } from './styles';
import { Hidden, Drawer, Typography, ListItemIcon } from '@material-ui/core';
import { connect } from 'react-redux';
import { ToggleDrawer } from '../../store/sidenav/actions';
import { adminMenu, failMenu } from './constants';
import imageEmpty from '../../assets/images/userpicture.jpg';
import { getAuth } from 'store/auth/selectors';
import { Dictionary } from 'shared/interfaces/Dictionary';
import { ChevronRight } from '@material-ui/icons';
import { getDrawer } from 'store/sidenav/selectors';
import SwitchUser from 'pages/switchUser';

const match = (route: string) => matchPath(window.location.pathname, route);

class Menu extends PureComponent<any, any> {
  state = { avatar: imageEmpty };

  componentDidMount() {}

  render() {
    const { classes, dispatch, theme, open, isAdmin } = this.props;
    const { avatar } = this.state;

    const menu = isAdmin ? adminMenu : failMenu;

    const drawer = (
      <div>
        {/* User info */}
        <div className={classes.toolbar}>
          <Link to="/orders">
            <img className={classes.avatar} src={avatar} />
          </Link>
          <List>

              <ListItem
                button
                className={classes.cntItemOption}
                key={`userMenu`}
              >
                <ListItemText
                  primary={
                    <Typography className={classes.headerMenuInfo}>
                      {isAdmin ? 'Gerente' : 'Despachador'}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant={'h6'}
                      className={classes.menuItemLabelSecondary}
                      noWrap
                    >
                      {isAdmin ? 'Gerente@frubana.co' : 'Despachador@frubana.co'}
                    </Typography>
                  }
                />
                <ListItemIcon
                  className={`${classes.cntMenuIcon} ${
                    match('/profile') ? classes.cntMenuIconActive : ''
                  }`}
                >
                  <span className={`${classes.menuIcon} ic-chevron-right`} />
                </ListItemIcon>
              </ListItem>
          </List>
        </div>
        <Divider className={classes.separator} />
        {/* Main Menu */}
        <List>
          {menu.map((item: Dictionary, index: number) => (
            <NavLink
              to={`/${item.label}`}
              className={classes.menuItem}
              key={`mainMenu_${index}`}
              activeClassName={classes.activeOption}
              exact
            >
              <ListItem button className={classes.cntItemOption}>
                <ListItemText
                  primary={
                    <Typography className={classes.menuItemLabel}>
                      {item.name}
                    </Typography>
                  }
                />
                <ListItemIcon
                  className={`${classes.cntMenuIcon} ${
                    match(`/${item.label}`) ? classes.cntMenuIconActive : ''
                  }`}
                >
                  <ChevronRight className={classes.menuIcon} />
                </ListItemIcon>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider className={classes.separator} />
        <List>
        <NavLink
        to=""
              onClick={()=>{}}
              className={classes.menuItem}
              key={`secondMenu`}
              activeClassName={classes.activeOption}
              exact
            >
              <ListItem>
                <ListItemText>

          <SwitchUser/>
                </ListItemText>
              </ListItem>
              </NavLink>
        </List>

      </div>
    );

    return (
      <nav className={open ? classes.drawer : ''}>
        <Hidden smUp>
          <Drawer
            container={this.props.container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClose={() => dispatch(ToggleDrawer())}
            classes={{ paper: classes.drawerPaper }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            transitionDuration={600}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            onClose={() => dispatch(ToggleDrawer())}
            classes={{ paper: classes.drawerPaper }}
            variant="persistent"
            open={open}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

const mapStateToProps = (state: Dictionary) => ({
  open: getDrawer(state),
  isAdmin: getAuth(state),
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps),
)(withRouter(Menu));
