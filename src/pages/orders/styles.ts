import { colors } from '../../assets/styles/colors';

export const styles = () => ({
  buttonsFilter: {
    color: colors.frubanaOrangeLigth,
    // fontWeight: 'bold',
    '&:hover': {
      color: colors.coolGreen,
      backgroundColor: colors.whiteSmoke,
      fontWeight: 'bold' as 'bold',
      fontSize: '1.1rem',
    },
  },
  ctnFilter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon:{
    color: colors.frubanaOrangeLigth,
    fontSize: '1.1rem',
  }
});
