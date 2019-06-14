import React, { PureComponent, Dispatch, Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@material-ui/core';
import { Dictionary } from 'shared/interfaces/Dictionary';
import { Redirect } from 'react-router-dom';

import { styles } from './styles';
import { Action } from 'shared/interfaces/Action';
import { getAuth } from 'store/auth/selectors';
import { logIn } from 'store/auth/actions';

interface Props {
  dispatch: Dispatch<Action>;
  classes?: any;
  isAdmin: boolean;
}
interface State {
  open: any;
  id: any;
  uri: any;
  flag: boolean;
  redirect: boolean;
  advice: boolean;
}

class SwitchUser extends PureComponent<Props, State> {
  anchorEl: any = null;
  state = {
    id: null,
    uri: null,
    open: false,
    flag: false,
    redirect: false,
    advice: false,
  };

  componentDidMount = () => {
    this.setState({ flag: false });
  };

  handleToggle = () => {
    this.setState((state: any) => ({ open: !state.open }));
  };

  handleClose = (e: any) => {
    if (this.anchorEl.contains(e.target)) {
      return;
    }

    this.setState({ open: false });
  };

  removeQuote = (flag: boolean) => {
    if (flag) {
      // const { dispatch, id, users, name = '', status, intl } = this.props;
      // dispatch(deleteQuote(id, users.uid));
      return this.setState({
        advice: !flag,
      });
    }
    this.setState({
      advice: flag,
    });
  };

  handleSelect = (e: any, number: number) => {
    const { dispatch } = this.props;
    if (this.anchorEl.contains(e.target)) {
      return;
    }

    switch (number) {
      case 1: {
        const data: any = {
          status: 'sent',
        };
        if (status !== 'draft') {
          data.resend = true;
        }
        dispatch(logIn(true));
        this.setState({ open: false });
        break;
      }
      case 2:
          dispatch(logIn(false));
        this.setState({ open: false });
        break;
      default:
        this.setState({ open: false });
        break;
    }
  };
  render() {
    const {  classes, isAdmin } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <Button
          buttonRef={(node) => {
            this.anchorEl = node;
          }}
          className={false ? classes.active : classes.disable}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          variant="text"
          onClick={this.handleToggle}
        >
          Cambiar Usuario
        </Button>
        <Popper
          className="menu-Z-index"
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'right' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem
                      selected={isAdmin}
                      onClick={(event) => this.handleSelect(event, 1)}
                    >
                      Gerente
                    </MenuItem>
                    <MenuItem
                      selected={!isAdmin}
                      onClick={(event) => this.handleSelect(event, 2)}
                    >
                      Despachador
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: Dictionary) => {
  return {
   isAdmin: getAuth(state)
  };
};

export default withStyles(styles)(
  connect(mapStateToProps)(SwitchUser),
);
