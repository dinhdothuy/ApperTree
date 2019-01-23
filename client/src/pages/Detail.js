import React, { Component } from "react";
import { Container } from "../components/Grid";
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
            <div className="card">
              <h2 className="card-header">
                {this.state.apper.name} by {this.state.apper.author}
              </h2>
              <div className="card-body">
                <img className="card-img-top" src={this.state.apper.pic} alt={this.state.apper.name} />
              </div>
              <div className="card-footer" style={{paddingBottom: 40}}>
                <h3 className="card-text">Synopsis : </h3> 
                <p>{this.state.apper.synopsis}</p>
                <h3>Learn more :</h3>
                <br />
                <a target="blank" href={this.state.apper.githublink} 
                  style={{backgroundColor: "gray", color: "white", padding: 20, marginRight: 20}}>
                  <i class="fa fa-github" style={{marginRight: 10}}></i>
                  Repositorie
                </a>
                <a target="blank" href={this.state.apper.deploylink}
                  style={{backgroundColor: "gray", color: "white", padding: 20}}>
                  <i class="fa fa-share" style={{marginRight: 10}}></i>
                  Try App
                </a>
                <button className="btn btn-success float-right">
                  Comment
                </button>
              </div>
            </div>       
      </Container>
    );
  }
}

export default AppDetail;
