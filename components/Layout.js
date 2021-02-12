import Navbar from "./NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider } from "@material-ui/core/styles";
import alexTheme from "../src/theme";

export default function Layout({ children }) {
  return (
    <MuiThemeProvider theme={alexTheme}>
      <CssBaseline />
      <Box className="pageContainer">
        <Navbar />
        {children}
      </Box>
    </MuiThemeProvider>
  );
}
