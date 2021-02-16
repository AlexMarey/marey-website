import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const alexTheme = createMuiTheme({
  palette: {
    background: {
      default: "#e3e3e3",
    },
  },
  typography: {
    fontFamily: `"HelveticaNeue", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default alexTheme;
