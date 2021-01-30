import Typography from '@material-ui/core/Typography';

export default function NavButton({text, style}) {
    return( 
            <Typography variant="button" className={style}>{text}</Typography>
    );
}