import { colors, Typography } from '../../../assets/styles';

export const styles = (theme: any) => ({
  cntEmptyState: {
    display: 'flex',
    alignItems: 'center',
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
  },
  illustration: {
    width: '90%',
    height: '100%',
    backgroundColor: colors.grey3,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '50vh',
      marginBottom: '2rem',
    },
  },

  listInfo: { marginLeft: '2%' },
  title: { ...(Typography.title2 as any), margin: '1rem 0' },
  itemOption: {
    paddingBottom: 0,
    paddingLeft: 0,
    alignItems: 'flex-start',
  },
  itemIcon: {
    color: colors.coolGreen,
    fontSize: '1.1875rem',
  },
  btnCreateQuote: {
    height: '2.8125rem',
    marginTop: '3rem',
  },
  link: { textDecoration: 'none' },

  gridWrapper: {
    paddingBottom: '20vh',
  },
});
