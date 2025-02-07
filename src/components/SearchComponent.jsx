import { Component } from "react";
import { Form, Button, Collapse } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

class SearchForm extends Component {
  state = {
    open: false,
  };

  toggleCollapse = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <Form className="d-flex align-items-center" role="search">
        <Collapse in={this.state.open}>
          <div className="me-2">
            <Form.Control type="text" placeholder="Titles, people, genres" />
          </div>
        </Collapse>
        <Button
          style={{ backgroundColor: "#221f1f" }}
          variant="dark"
          onClick={this.toggleCollapse}
          aria-expanded={this.state.open}
          aria-controls="inputCollapse"
        >
          <Search />
        </Button>
      </Form>
    );
  }
}

export default SearchForm;
