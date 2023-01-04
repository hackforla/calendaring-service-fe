import { createTheme } from '@mui/material/styles';
const blue = '#249be5';
const grey = '#8492A6';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue,
    },
    secondary: {
      main: grey,
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
      fontSize: 32,
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      fontWeight: 400,
      margin: '2rem 0',
    },
    h6: {
      fontSize: 20,
      fontWeight: 500,
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
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          height: '3rem',
          width: '3rem',
          color: blue,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'acd9f5',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D9D9D9',
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D9D9D9',
          },
        },
      },
    },
  },
});

console.log(theme);
