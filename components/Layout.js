import Navbar from "./NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      {children}
    </React.Fragment>
  );
}
