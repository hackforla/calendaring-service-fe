import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#249be5',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: 96,
    },
    h2: {
      fontSize: 60,
    },
    h3: {
      fontSize: 48,
      fontWeight: 400,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      fontWeight: 400,
      margin: '2rem 0',
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 12,
    },
    subtitle1: {
      fontSize: 14,
    },
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: '#FFC0CB',
      },
    },
    MuiIcon: {
      root: {
        height: '3rem',
        width: '3rem',
        color: '#249be5',
      },
    },
  },
});
