export const darkTheme = {
  title: 'darkTheme',

  colors: {
    primary: '#1781FF',
    red_50: '#FC7C7C',
    red_100: '#FF6060',
    yellow_10: '#FFF1AD',
    yellow_100: '#FFD426',
    yellow_200: '#FFB340',
    green_80: '#00BE68',
    black: '#000',
    white: '#fff',

    gray_10: '#1C1C1E',
    gray_20: '#2C2C2E',
    gray_30: '#3A3A3C',
    gray_40: '#48484A',
    gray_50: '#636366',
    gray_60: '#AEAEB2',

    gray_70: '#929AA3',
    gray_80: '#B1B8BE',
    gray_90: '#D3D6DA',
    gray_100: '#DFE1E4',
    gray_110: '#ecedef',
    gray_120: '#F4F4F7',
    neutral_white: '#000000',
    neutral_black: '#ffffff',

    aside: '#2f2f2f',
    content: '#333333',
  },

  font: {
    family: {
      primary: "'Open Sans', sans-serif",
    },
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
    },
    size: {
      xxsmall: '1.0rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.4rem',
      big: '4.8rem',
      xbig: '6.0rem',
      huge: '9.6rem',
    },
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },

  breakpoints: {
    xmodile: '320px',
    modile: '480px',
    tablet: '768px',
    desktop: '1170px',
    hd: '1440px',
  },

  layers: {
    hide: -1,
    auto: 'auto',
    base: 1,
    dropdown: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwayOnTop: 50,
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },

  border: {
    radius: {
      xsmall: '0.2rem',
      small: '0.5rem',
      medium: '0.8rem',
      large: '2rem',
      circle: '50%',
    },
  },

  shadow: {
    base: '0 2px 10px 0 rgba(0, 41, 77, 0.1)',
    xs: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
    sm: '0 2px 20px 0 rgba(0, 0, 0, 0.2)',
    md: '0px 10px 15px 0px rgba(0, 0, 0, 0.25)',
    lg: '0px 20px 40px 10px rgba(0, 0, 0, 0.50)',
  },

  opacity: {
    zero: '0',
    high: '0.25',
    medium: '0.5',
    low: '0.75',
    normal: '1',
  },
} as const;
