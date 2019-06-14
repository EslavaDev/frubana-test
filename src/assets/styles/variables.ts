export const drawerWidth = 240;

// Font family
export const FontFamily = {
  bold: 'interUI-bold',
  semibold: 'interUI-semibold',
  medium: 'interUI-medium',
  regular: 'interUI-regular',
};

export const Typography = {
  hero: {
    fontSize: '2.25rem', // 36pts
    lineHeight: '2.625rem', // 42pts
    fontFamily: FontFamily.bold,
    margin: 0,
    fontWeight: 'normal',

    // @include respond-to('lg') {
    //     fontSize: '3rem', // 48pts
    //     lineHeight: '3.5rem', // 56pts
    // }
  },

  largeTitle: {
    fontSize: '2.25rem', // 36pts
    lineHeight: '2.625rem', // 42pts
    fontFamily: FontFamily.bold,
    margin: 0,
  },

  title: {
    fontSize: '1.75rem', // 28pts
    lineHeight: '2rem', // 32pts
    fontFamily: FontFamily.semibold,
    margin: 0,
  },

  title2: {
    fontSize: '1.5rem', // 24pts
    lineHeight: '2rem', // 32pts
    fontFamily: FontFamily.regular,
    margin: 0,
  },

  subtitle: {
    fontSize: '1.125rem', // 18pts
    lineHeight: '1.5rem', // 24pts
    fontFamily: FontFamily.semibold,
    margin: 0,
  },

  headline: {
    fontSize: '0.875rem', // 14pts
    lineHeight: '1.25rem', // 20pts
    fontFamily: FontFamily.semibold,
    margin: 0,
  },

  body: {
    fontSize: '0.875rem', // 14pts
    lineHeight: '1.25rem', // 20pts
    fontFamily: FontFamily.regular,
    margin: 0,
  },

  body2: {
    fontSize: '1.125rem', // 14pts
    lineHeight: '1.25rem', // 20pts
    fontFamily: FontFamily.regular,
    margin: 0,
  },

  small: {
    fontSize: '0.75rem', // 12pts
    lineHeight: '1rem', // 16pts
    fontFamily: FontFamily.semibold,
    margin: 0,
  },
  small2: {
    fontSize: '0.75rem', // 12pts
    lineHeight: '1rem', // 16pts
    fontFamily: FontFamily.regular,
    margin: 0,
  },
};
