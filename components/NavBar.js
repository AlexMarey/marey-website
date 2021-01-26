import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavButton from './NavButton.js';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarTitle: {
        flex: 1,
        alignContent: 'left',
    },
    toolbarButtons: {
        alignContent:'right',
        justifyContent: 'space-between',
    }
}));

export default function Navigation() {
    const classes = useStyles();

    return( 
        <Toolbar className={classes.toolbar}>
            <Typography variant="h4" className={classes.toolbarTitle}>Marey</Typography>
            <Box className={classes.toolbarButtons}>
                <NavButton text={"About Me"}/>
                <NavButton text={"Posts"}/>
                <NavButton text={"Contact Me"}/>
            </Box>

        </Toolbar>
    );
}