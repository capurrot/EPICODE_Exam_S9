import "./App.css";
import FilmComponent from "./components/FilmComponent";
import FooterComponent from "./components/FooterComponent";
import GenreComponent from "./components/GenreComponent";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <>
      <NavComponent />
      <GenreComponent />
      <FilmComponent filmSearchTitle="Batman" />
      <FilmComponent filmSearchTitle="Superman" />
      <FilmComponent filmSearchTitle="Avengers" />
      <FooterComponent />
    </>
  );
}

export default App;
