import { colors } from '../../assets/styles';

export const styles = (theme: any) => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    top: '63px !important',
    width: 240,
    backgroundColor: colors.greyBlack,
    color: 'grey',
    transition: 'transform 700ms',
  },
  separator: {
    backgroundColor: colors.white3,
  },
  // User Info
  avatar: {
    width: '2.75rem',
    height: '2.75rem',
    borderRadius: '50%',
    objectFit: 'cover' as 'cover',
    margin: '1em 0 -0.5em 1em',
  },
  // Menu Items
  menuItem: {
    textDecoration: 'none',
    color: colors.whiteSmoke,
    backgroundColor: colors.greyBlack,
  },
  activeOption: {
    color: 'green',
    backgroundColor: colors.frubanaOrangeLigth,
  },
  cntItemOption: {
    paddingTop: '0.84375rem',
    paddingBottom: '0.84375rem',
    backgroundColor: 'inherit !important',
  },
  menuItemLabel: {
    color: colors.white3,
    fontWeight: 400,
  },

  headerMenuInfo:{
    color: colors.frubanaOrangeLigth,
    fontWeight: 'bold' as 'bold',
  },

  menuItemLabelSecondary: {
    color: colors.white2,
    fontWeight: 400,
  },
  cntMenuIcon: {
    color: colors.coolGreen,
  },
  cntMenuIconActive: {
    color: colors.white3,
  },
  menuIcon: {
    color: 'inherit',
  },
});
