import Navbar from './NavBar';
import Container from '@material-ui/core/Container';

export default function Layout({children}) {
    return( 
        <React.Fragment>
            <Navbar/>
            <Container maxWidth="lg">
                {children}
            </Container>
        </React.Fragment>
        
    );
}