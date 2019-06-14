import { colors, Typography } from 'assets/styles';
import { red } from '@material-ui/core/colors';

export const styles = (theme: any) => ({
  textColor: {
    color: colors.error,
  },
  deleteBtn: {
    color: colors.error,
    border: `1px solid ${colors.error}`,
  },
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  active: {
    height: '1.7rem',
    color: colors.whiteSmoke,
    background: colors.orange,
    ...Typography.small,
  },
  disable: {
    height: '1.7rem',
    background: colors.greyBlack,
    color: colors.whiteSmoke,
    ...Typography.body,
  },
});
