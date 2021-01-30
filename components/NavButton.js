import Link from "next/link";
import Typography from '@material-ui/core/Typography';

export default function NavButton({button, style}) {
return( 
            <Link href={button.url}>
                <Typography variant="button" className={style}>{button.title}</Typography>
            </Link>
    );
}