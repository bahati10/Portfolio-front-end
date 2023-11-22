import { createTheme } from '@material-ui/core/styles';
import { constantColors } from '../constants/colors/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: constantColors.textColor
    },
    secondary: {
      main: constantColors.backgroundColor
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
