import { colors } from '../../../assets/styles/colors';

export const styles =(theme:any) => ({
  card: {
    display: 'flex' as 'flex',
    width: '20rem',
    borderRadius: '0.2rem',
    position: 'relative' as 'relative'
  },
  content: {
    padding: 0,
  },

  titleCard: {
    color: colors.textTitle,
    fontWeight: 500,
  },
  textCard: {
    color: colors.textBody,
    fontSize: '0.8rem',
  },
  availableText: {
    color: colors.coolGreen,
    fontSize: '1rem',
    fontWeight: 400,
  },
  gridFlip:{
    transform:'rotateY(180deg)',
    'zIndex': 0,
    transition: '.4s'
  },
  nonGridFlip:{
    transform:'rotateY(0deg)',
    'zIndex': 1,
    transition: '.4s'
  },
  notAvailableText: {
    color: colors.error,
    fontSize: '1rem',
    fontWeight: 400,
  },
  ctnButtons: {
    marginTop: '1rem',
    width: '100%',
  },

  buttonRemove: {
    color: colors.error,
    cursor: 'pointer',
  },
  buttonAdd: {
    color: colors.coolGreen,
    cursor: 'pointer',
  },

  buttonNext: {
    color: colors.orange,
    cursor: 'pointer',
    right: '0px',
    top: '0px',
    position: 'absolute' as 'absolute',
    zIndex: 2
  },
  buttonNextText: {
    color: colors.orange,
    cursor: 'pointer',
    right: '40px',
    bottom: '16px',
    position: 'absolute' as 'absolute',

    fontSize: '20px',
    [theme.breakpoints.down('xs')]: {
      bottom: '0px',
    },
  },
  buttonNextIcon: {
    color: colors.orange,
    cursor: 'pointer',
    right: '0px',
    top: '0px',

    position: 'absolute' as 'absolute',
    fontSize: '40px',
    zIndex: 2
  },

  imageBanner: {
    width: '100%',
    height: '7rem',
    objectFit: 'cover' as 'cover',
  },

  link:{
    textDecoration: 'none'
  }
});
