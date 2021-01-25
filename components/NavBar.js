import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavButton from './NavButton.js';

export default function Navigation() {
    
    return( 
        <Toolbar>
            <Typography variant="h4">Marey</Typography>

            <NavButton text={"About Me"}/>
            <NavButton text={"Posts"}/>
            <NavButton text={"Contact Me"}/>
        </Toolbar>
    );
}