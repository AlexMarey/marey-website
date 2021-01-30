import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavButton from './NavButton.js';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        overflowX: 'auto',
    },
    toolbarTitle: {
        flex: 2,
    },
    toolbarButtons: {
        flex: 1,
    },
    navButton: {
        padding: theme.spacing(1),
    }
}));

const navigationButtons = ["About Me", "Posts", "Contact Me"];

export default function Navigation() {
    const classes = useStyles();

    return( 
        <Toolbar className={classes.toolbar}>
            <Typography variant="h4" className={classes.toolbarTitle}>Marey</Typography>
            <Box className={classes.toolbarButtons} justifyContent='center' display='flex'>
                {navigationButtons.map((title) => {
                    return <NavButton key={title} text={title} style={classes.navButton}/>
                })}
            </Box> 
        </Toolbar>
        
    );
}