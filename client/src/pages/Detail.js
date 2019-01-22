import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
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
      <Container>
        <Row>
          <Col size="md-12">
            <div className="card">
              <h2 className="card-header">
                {this.state.apper.name} by {this.state.apper.author}
              </h2>
              <div className="card-body">
                  
                    <img className="card-img-top" src={this.state.apper.pic} alt={this.state.apper.name} />
                    <h3 className="card-text" style={{margin: 20}}>Synopsis: </h3> 
                    <p>{this.state.apper.synopsis}</p>

                <Row>
                  <Col size="md-10 md-offset-1">
                    <article>
                      <h3>Learn more:</h3>
                      <p>Repository link: {this.state.apper.githublink}</p>
                      <p>Deployed link: {this.state.apper.deploylink}</p>  
                    </article>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>  
        </Row>          
        <Row>
          <Col size="md-4">
            <Link to="/">All Apps</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AppDetail;
