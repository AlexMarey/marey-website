import Navbar from './NavBar';
import Container from '@material-ui/core/Container';

export default function Layout({children}) {
    return( 
        <Container maxWidth="md">
            <Navbar/>
            {children}
        </Container>
    );
}