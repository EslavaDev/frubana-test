import React, { PureComponent, Fragment } from 'react';
import {
  Grid,
  withStyles,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from '@material-ui/core';
import { styles } from './styles';
import {
  ArrowRight,
  ArrowLeft,
  ArrowForward,
  ArrowBack,
} from '@material-ui/icons';

import Banner from '../../../assets/images/banner.png';
import Mercado from '../../../assets/images/mercado.jpg';

import { Order } from '../../interfaces/Order';
import { Product } from '../../interfaces/Product';
import { NavLink } from 'react-router-dom';
import BackCard from './BackCard';

interface Props {
  classes: any;
  itemOrder?: Order | any;
  itemProduct?: Product | any;
  product: boolean;
  isAdmin: boolean;
  sendProductTrue?: any;
  sendProductFalse?: any;
}

interface State {
  hover: boolean;
  open: boolean;
}

class CardProduct extends PureComponent<Props, State> {
  state = {
    hover: false,
    open: false,
  };
  isProduct = (isOrder: boolean) => {
    const { classes, itemProduct, itemOrder } = this.props;

    const temp = isOrder
      ? itemOrder.percentage && itemOrder.percentage === 100
      : itemProduct.flag;

    return {
      css: temp ? classes.availableText : classes.notAvailableText,
      text: temp ? 'Alistado' : 'No alistado',
    };
  };

  openDialog = (open: boolean) => {
    this.setState({ open });
  };

  render() {
    const {
      classes,
      itemProduct,
      itemOrder,
      product,
      isAdmin,
      sendProductTrue,
      sendProductFalse,
    } = this.props;

    const { hover, open } = this.state;

    const validate = !product && isAdmin;

    return (
      <Grid container spacing={16} direction="column" wrap="wrap">
        <Card className={classes.card}>
          {validate && !hover && (
            <Grid
              container
              direction="row"
              className={classes.buttonNext}
              justify="center"
              alignItems="flex-end"
              onClick={() => {
                this.setState({ hover: !hover });
              }}
            >
              {/* <Typography className={classes.buttonNextText}>
                Detalles
              </Typography> */}
              <ArrowForward className={classes.buttonNextIcon} />
            </Grid>
          )}
          {validate && hover && (
            <ArrowBack
              className={classes.buttonNextIcon}
              onClick={() => {
                this.setState({ hover: !hover });
              }}
            />
          )}
          <Grid
            container
            direction="column"
            className={hover ? classes.gridFlip : classes.nonGridFlip}
            style={{ position: 'relative', background: ' #fff', zIndex: 1 }}
          >
            <CardMedia
              className={classes.imageBanner}
              image={product ? Mercado : Banner}
            />
            <CardContent className={classes.content}>
              <Typography
                className={classes.titleCard}
                align="left"
                component="h5"
                variant="h5"
              >
                {product ? itemProduct.name : itemOrder.user.name}
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                className={this.isProduct(!product).css}
              >
                {this.isProduct(!product).text}
              </Typography>
            </CardContent>
            {product ? (
              <Grid
                container
                direction="row"
                className="padding-0"
                wrap="nowrap"
              >
                <Grid
                  container
                  direction="column"
                  wrap="nowrap"
                  className="padding-0"
                >
                  <Grid item>
                    <Typography className={classes.textCard} align="left">
                      <strong> Cantidad: </strong> {itemProduct.quantity}
                    </Typography>
                    <Typography className={classes.textCard} align="left">
                      <strong> Precio: </strong> $ {itemProduct.price}
                    </Typography>
                    <Typography className={classes.textCard} align="left">
                      <strong> Total: </strong> $ {itemProduct.total}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="column"
                  wrap="nowrap"
                  className="padding-0"
                  justify="center"
                  alignItems="flex-start"
                  style={{ marginTop: '-10%' }}
                  spacing={16}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => sendProductTrue()}
                    >
                      Despachar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      onClick={() => sendProductFalse()}
                    >
                      No Despachar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item>
                <Typography className={classes.textCard} align="left">
                  <strong> Region: </strong> {itemOrder.region_code}
                </Typography>
                <Typography className={classes.textCard} align="left">
                  <strong> Porcentaje: </strong>{' '}
                  {itemOrder.percentage ? itemOrder.percentage : 0}%
                </Typography>
                <Typography className={classes.textCard} align="left">
                  <strong> Horario: </strong> {itemOrder.slot}
                </Typography>
                <Typography className={classes.textCard} align="left">
                  <strong> Ruta: </strong> {itemOrder.routeId}
                </Typography>
              </Grid>
            )}
            {!product && (
              <NavLink className={classes.link} to={`/orders/${itemOrder._id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.ctnButtons}
                >
                  Alistar
                </Button>
              </NavLink>
            )}
          </Grid>
          {!product && (
            <Grid
              container
              direction="column"
              justify="center"
              spacing={8}
              className={`${hover ? classes.nonGridFlip : classes.gridFlip}`}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                background: '#fff',
                top: 0,
              }}
            >
              <BackCard
                order={itemOrder}
                open={open}
                toggle={this.openDialog}
              />
            </Grid>
          )}
        </Card>
      </Grid>
    );
  }
}
export default withStyles(styles)(CardProduct);
