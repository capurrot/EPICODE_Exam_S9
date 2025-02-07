import { Component } from "react";
import { Row, Col, Image, Spinner, Alert } from "react-bootstrap";

class FilmComponent extends Component {
  state = {
    films: [],
    isLoading: false,
    hasError: false,
    errorMessage: "",
  };

  fetchFilms = async (filmSearch) => {
    try {
      this.setState({ isLoading: true });

      const response = await fetch(`http://www.omdbapi.com/?s=${filmSearch}&apikey=54eecc21&page=1`);

      if (response.ok) {
        const films = await response.json();
        this.setState({
          films: (films.Search || []).slice(0, 6).map((film) => film.Poster),
        });
      } else if (response.status === 401) {
        throw new Error("401 - non autorizzato");
      } else if (response.status === 404) {
        throw new Error("404 - risorsa inesistente");
      } else if (response.status === 500) {
        throw new Error("500 - Errore interno del server");
      } else if (response.status === 403) {
        throw new Error("403 - Accesso negato");
      } else if (response.status === 429) {
        throw new Error("429 - Troppe richieste, attendi qualche secondo");
      } else if (response.status === 503) {
        throw new Error("503 - Servizio non disponibile, riprova più tardi");
      } else {
        throw new Error("Errore nel reperimento dei dati: " + response.status);
      }
    } catch (error) {
      console.error("Errore nel reperimento dei dati: ", error);
      this.setState({ hasError: true, errorMessage: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchFilms(this.props.filmSearch);
  }

  render() {
    return (
      <>
        <h4>{this.props.filmSearch.replace(/\+/, " ")}</h4>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="danger" className="d-block mx-auto p-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {this.state.hasError && (
          <Alert variant="danger">{this.state.errorMessage ? this.state.errorMessage : "Errore generico"}</Alert>
        )}
        <Row className="mb-4" xs={1} sm={2} lg={4} xl={6}>
          {this.state.films.map((src, index) => (
            <Col key={index} className="mb-2 text-center px-1">
              <Image src={src} alt="movie picture" className="filmimg" />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default FilmComponent;
