import Navbar from "./NavBar";
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
    </React.Fragment>
  );
}
