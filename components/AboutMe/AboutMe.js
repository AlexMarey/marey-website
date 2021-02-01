import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function AboutMe() {
  return (
    <Box>
      <Typography variant='h6' gutterBottom>This is my life</Typography>
      <ul>
          <li>Raised and born in St.Louis, finding a new home on the East coast</li>
          <li>Software developer by day with a sweet tooth for excellent user experience</li>
          <li>Doesn't matter if I'm playing video games or board games as long as I'm in good company</li>
          <li>In my spare time I like to be creative by taking photos or drawing</li>
          <li>The beach is better than mountains</li>
          <li>Running, volleyball, yoga, skateboarding, or bouldering. You name it, I want to try it.</li>
      </ul>
    </Box>
  );
}
