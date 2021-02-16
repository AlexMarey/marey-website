import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ComponentContainer from "./ComponentContainer";

const factsAboutMe = [
  "Software developer with a sweet tooth for excellent user experience",
  "Born and raised in St.Louis, finding a new home on the East coast",
  "It doesn't matter if I'm playing video games or board games as long as I'm in good company",
  "I like to scratch my creative itch by taking photos, drawing, or painting",
  "The beach is better than mountains",
  "Running, volleyball, yoga, skateboarding, or bouldering. You name it, I want to try it.",
];

export default function AboutMe() {
  return (
    <ComponentContainer>
      <Box m={1} pt={1} pb={1}>
        <Typography variant="h6" gutterBottom>
          A Little Bit About Me
        </Typography>
        <ul className="asterisk">
          {factsAboutMe.map((fact, index) => {
            return (
              <li key={index}>
                <Typography variant="body1">{fact}</Typography>
              </li>
            );
          })}
        </ul>
      </Box>
    </ComponentContainer>
  );
}
