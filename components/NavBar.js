import Link from "next/link";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavButton from './NavButton.js';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        overflowX: 'auto',
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 2,
        marginLeft: theme.spacing(1),
    },
    toolbarButtons: {
        flex: 1,
    },
    navButton: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    }
}));

const navigationButtons = [
    {
        title: "About Me",
        url: "/"
    }, 
    {
        title: "Posts",
        url: "/posts"
    }, 
    {
        title: "Contact Me",
        url: "/contact"
    }
];

export default function Navigation() {
    const classes = useStyles();

    return( 
        <Toolbar className={classes.toolbar}>
            <Link href={"/"}>
                <Typography variant="h5" className={classes.toolbarTitle}>Marey</Typography>
            </Link>
            <Box className={classes.toolbarButtons} justifyContent='center' display='flex'>
                {navigationButtons.map((button) => {
                    return <NavButton key={button.title} button={button} style={classes.navButton}/>
                })}
            </Box> 
        </Toolbar>
        
    );
}