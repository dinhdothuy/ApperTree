import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class AppDetail extends Component {
  state = {
    apper: {}
  };
  // When this component mounts, grab the apper with the _id of this.props.match.params.id
  // e.g. localhost:3000/appers/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getApper(this.props.match.params.id)
      .then(res => this.setState({ apper: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.apper.name} by {this.state.apper.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.apper.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Learn more:</h1>
              <a herf={this.state.apper.githublink}>
                Github Repository link
              </a>
              <a herf={this.state.apper.deploylink}>
                Deployed App
              </a>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to APPER TREE</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AppDetail;
