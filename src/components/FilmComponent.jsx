import { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class FilmComponent extends Component {
  state = {
    films: [],
  };

  fetchFilms(filmSearchTitle) {
    fetch(`http://www.omdbapi.com/?s=${filmSearchTitle}&apikey=54eecc21&page=1`)
      .then((response) => response.json())
      .then((data) => this.setState({ films: (data.Search || []).slice(0, 6).map((movie) => movie.Poster) }))
      .catch((error) => console.error("Error fetching data:", error));
  }

  componentDidMount() {
    this.fetchFilms(this.props.filmSearchTitle);
  }

  render() {
    return (
      <Container fluid>
        <h4>{this.props.filmSearchTitle}</h4>
        <Row className="mb-4" xs={1} sm={2} lg={4} xl={6}>
          {this.state.films.map((src, index) => (
            <Col key={index} className="mb-2 text-center px-1">
              <Image src={src} alt="movie picture" className="filmimg" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FilmComponent;
