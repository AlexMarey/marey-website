import { Box, Tooltip, Typography } from "@material-ui/core";
import TwitterIcon from "../public/TwitterLogoblue.svg";
import EmailIcon from "../public/EmailIcon.svg";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: 50,
    width: "auto",
    margin: theme.spacing(1),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      color="#e3e3e3"
      bgcolor="#233142"
    >
      <Typography variant="h6" gutterBottom>
        Want to chat? Reach out to me on Twitter
      </Typography>
      <Box className="break" />
      {/* <Link href="mailto:alx.9.mar@gmail.com">
        <a>
          <EmailIcon className={classes.icon} />
        </a>
      </Link> */}
      <Link href={"https://twitter.com/AlexTakesOnCHS"}>
        <a>
          <TwitterIcon className={classes.icon} />
        </a>
      </Link>
    </Box>
  );
}
