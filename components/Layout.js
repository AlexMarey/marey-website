import Navbar from "./NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="pageContainer">
        <Navbar />
        {children}
      </Box>
    </React.Fragment>
  );
}
