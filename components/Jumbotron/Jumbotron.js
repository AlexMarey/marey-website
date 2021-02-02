import styles from './Jumbotron.module.css';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function Jumbotron() {
  return (
    <Box m={2}>
      <Box display="flex"> 
        <Box className={styles.imgWrapper} m="auto" pt={2}>
          <img className={styles.imgCropper} src="/alex-square-edit.jpg"/>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h4" gutterBottom>Welcome! Enjoy your stay.</Typography>
      </Box>
    </Box>
  );
}