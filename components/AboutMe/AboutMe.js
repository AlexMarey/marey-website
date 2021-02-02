import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const factsAboutMe = [
  'Raised and born in St.Louis, finding a new home on the East coast',
  'Software developer by day with a sweet tooth for excellent user experience',
  'Doesn\'t matter if I\'m playing video games or board games as long as I\'m in good company',
  'In my spare time I like to be creative by taking photos or drawing',
  'The beach is better than mountains',
  'Running, volleyball, yoga, skateboarding, or bouldering. You name it, I want to try it.',
]

export default function AboutMe() {
  return (
    <Box m={2} pt={2} pb={2}>
      <Typography variant='h6' gutterBottom>This is my life</Typography>
      <ul className="asterisk">
          {factsAboutMe.map((fact) => {
            return <li><Typography variant="body">{fact}</Typography></li>
          })}
      </ul>
    </Box>
  );
}
