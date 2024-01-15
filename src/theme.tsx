import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
    subtitle1: {
      "fontWeight": "bold"
    }
  },
  palette: {
    primary: {
      main: '#7390bb',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;