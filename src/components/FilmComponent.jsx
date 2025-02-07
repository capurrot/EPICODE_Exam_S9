import { Component } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";

class FilmComponent extends Component {
  state = {
    films: [],
    isLoading: false,
  };

  fetchFilms = async (filmSearchTitle) => {
    try {
      this.setState({ isLoading: true });

      const response = await fetch(`http://www.omdbapi.com/?s=${filmSearchTitle}&apikey=54eecc21&page=1`);
      const data = await response.json();

      this.setState({
        films: (data.Search || []).slice(0, 6).map((movie) => movie.Poster),
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchFilms(this.props.filmSearchTitle);
  }

  render() {
    return (
      <Container fluid className="px-4">
        <h4>{this.props.filmSearchTitle}</h4>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="danger" className="d-block mx-auto p-3">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
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
