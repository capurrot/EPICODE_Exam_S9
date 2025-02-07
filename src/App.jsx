import { Container } from "react-bootstrap";
import "./App.css";
import FilmComponent from "./components/FilmComponent";
import FooterComponent from "./components/FooterComponent";
import GenreComponent from "./components/GenreComponent";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <>
      <NavComponent />
      <Container fluid className="px-4">
        <GenreComponent />
        <FilmComponent filmSearch="Batman" />
        <FilmComponent filmSearch="Superman" />
        <FilmComponent filmSearch="Star+Trek" />
        <FooterComponent />
      </Container>
    </>
  );
}

export default App;
