import { Container } from "react-bootstrap";
import "./App.css";
import FilmComponent from "./components/FilmComponent";
import FooterComponent from "./components/FooterComponent";
import GenreComponent from "./components/GenreComponent";
import NavComponent from "./components/NavComponent";
import { Component } from "react";
import ProfileComponent from "./components/ProfileComponent";

class App extends Component {
  state = {
    page: "home",
    searchFilm: "",
  };

  updateState = (page) => {
    this.setState(page);
  };

  searchFilm = (searchFilm) => {
    this.setState(searchFilm);
  };

  render() {
    return (
      <>
        {this.state.page === "home" && <NavComponent updateState={this.updateState} searchFilm={this.searchFilm} />}
        {this.state.page === "profile" && <NavComponent type="profile" updateState={this.updateState} />}

        <Container fluid className="px-4">
          {this.state.page === "home" && (
            <>
              <GenreComponent />
              {this.state.searchFilm !== "" && (
                <FilmComponent key={this.state.searchFilm} filmSearch={this.state.searchFilm} />
              )}

              <FilmComponent filmSearch="Batman" />
              <FilmComponent filmSearch="Superman" />
              <FilmComponent filmSearch="Star+Trek" />
            </>
          )}

          {this.state.page === "profile" && <ProfileComponent updateState={this.updateState} />}

          <FooterComponent />
        </Container>
      </>
    );
  }
}

export default App;
