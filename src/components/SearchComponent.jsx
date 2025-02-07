import { Component } from "react";
import { Form, Button, Collapse } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

class SearchForm extends Component {
  state = {
    open: false,
    searchValue: "",
  };

  toggleCollapse = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  handleTextChange = (e) => {
    const value = e.target.value;
    this.setState({ searchValue: value });
  };

  render() {
    console.log(this.props);
    return (
      <Form className="d-flex align-items-center" role="search">
        <Collapse in={this.state.open}>
          <div className="me-2">
            <Form.Control
              type="text"
              placeholder="Titles, people, genres"
              value={this.state.searchValue}
              onChange={this.handleTextChange}
            />
          </div>
        </Collapse>
        <Button
          style={{ backgroundColor: "#221f1f" }}
          variant="dark"
          onClick={this.toggleCollapse}
          aria-expanded={this.state.open}
          aria-controls="inputCollapse"
          type="button"
        >
          <Search />
        </Button>
      </Form>
    );
  }
}

export default SearchForm;
