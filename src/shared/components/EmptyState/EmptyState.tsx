import React, { PureComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { styles } from './styles';

class EmptyState extends PureComponent<any, any> {
  render() {
    const { classes, handleRedirect, link, text, title } = this.props;
    return (
      <div className={classes.cntEmptyState}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={12} md={5} className={classes.gridWrapper}>
            <h1 className={classes.title}>{title}</h1>
            <List className={classes.listInfo}>
              <ListItem className={classes.itemOption} key={`cat_feat_${1}`}>
                <span className={`ic-check ${classes.itemIcon}`} />
                <ListItemText primary={text} />
              </ListItem>
            </List>
            <NavLink
              to={link}
              className={classes.link}
              activeClassName={classes.activeOption}
              exact
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.btnCreateQuote}
                fullWidth
              >
                Ir a Ordenes
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(EmptyState);
