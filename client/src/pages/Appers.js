import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import Hero from "../components/Hero";

class Books extends Component {
  state = {
    appers: [],
    name: "",
    author: "",
    synopsis: "",
    githublink: "",
    deploylink: "",
    image: ""
  };

  componentDidMount() {
    this.loadAppers();
  }

  loadAppers = () => {
    API.getAppers()
      .then(res =>
        this.setState({ appers: res.data, title: "", author: "", synopsis: "", githublink: "", deploylink: "", image: "" })
      )
      .catch(err => console.log(err));
  };

  deleteApper = id => {
    API.deleteApper(id)
      .then(res => this.loadAppers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.author && this.state.githublink && this.state.deploylink) {
      API.saveApper({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis,
        githublink: this.state.githublink,
        deploylink: this.state.deploylink,
        image: this.state.image
      })
        .then(res => this.loadAppers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        {/* <Row>
          <Hero backgroundImage="../../public/images/mainpage.png">
            <h2>Example Page</h2>
          </Hero>
        </Row> */}
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>New App to introduce:</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <Input
                value={this.state.githublink}
                onChange={this.handleInputChange}
                name="githublink"
                placeholder="Github Repository Link (required)"
              />
              <Input
                value={this.state.deploylink}
                onChange={this.handleInputChange}
                name="deploylink"
                placeholder="Deployed App Link (required)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="App Image/Logo Link (Optional)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.author && this.state.githublink && this.state.deploylink)}
                onClick={this.handleFormSubmit}
              >
                Submit App
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Apps On My List</h1>
            </Jumbotron>
            {this.state.appers.length ? (
              <List>
                {this.state.appers.map(apper => (
                  <ListItem key={apper._id}>
                    <Link to={"/appers/" + apper._id}>
                      <strong>
                        {apper.name} by {apper.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteApper(apper._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
