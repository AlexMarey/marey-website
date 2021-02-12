import Container from "@material-ui/core/Container";

export default function ComponentContainer({ children }) {
  return <Container maxWidth="lg">{children}</Container>;
}
