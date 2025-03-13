import Button from "./Button";
import Container from "./Container";

function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Container>
        <Button />
        <Button />
        <Button text="Sign Up" />
      </Container>
    </main>
  );
}

export default App;
