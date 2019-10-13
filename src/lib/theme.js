import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#3f50b5',
      dark: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;