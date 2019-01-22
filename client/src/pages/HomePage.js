import React, { Component } from "react";
import axios from 'axios'
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      appers: [],
      name: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.getUser();
    this.loadAppers();
  }

  loadAppers = () => {
    console.log("in load appers")
    API.getAppers()
      .then(res => {
           console.log("***** res")
           console.log(res)
           this.setState({appers: res.data, name: "", author: "", synopsis: "", githublink: "", deploylink: "", pic: "" })
        } 
    )
      .catch(err => console.log(err));
  };

  getUser() {
    axios.get('/user/login').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        this.setState({
          name: response.data.user.name,
          email: response.data.user.email,
          aboutMe: response.data.user.aboutMe,
          jobPosition: response.data.user.jobPosition,
          location: response.data.user.location,
          phone: response.data.user.phone,
          github: response.data.user.github,
          linkedin: response.data.user.linkedin,
          avatar: response.data.user.avatar,
          // appers : [{ type: Schema.Types.ObjectId, ref: 'Apper' }]
        })
      } else {
        console.log('Get user: no user');
        window.location.pathname = "/login"
      }
    })
  }

  render() {
    return (
      <div className="HomePage">
      <Container fluid>
      <Row>
        <Col size="md-4">
          <Jumbotron>
            <h5>Hello, {this.state.name}!</h5>
          </Jumbotron>

          <p>Email: {this.state.email}!</p>
          <p>aboutMe, {this.state.aboutMe}!</p>
          <p>jobPosition, {this.state.jobPosition}!</p>
          <p>location, {this.state.location}!</p>
          <p>phone, {this.state.phone}!</p>
          <p>github, {this.state.github}!</p>
          <p>linkedin, {this.state.linkedin}!</p>
          <p>avatar, {this.state.avatar}!</p>


        

        </Col>
        <Col size="md-8 sm-12">
          <Jumbotron>
            <h5>Apps On List</h5>
          </Jumbotron>
          {this.state.appers.length ? (
            <List>
              {this.state.appers.map(apper => (
                <ListItem key={apper._id}>
                  <div className="card">
                    <h5 className="card-header">
                      <Link to={"/appers/" + apper._id}>
                        <strong>{apper.name}</strong> by <strong>{apper.author}</strong>
                      </Link>
                    </h5>
                    <div className="card-body">
                      <Row>
                        <Col size="md-3 sm-12">
                          <img className="card-img-top" src={apper.pic} alt={apper.name} />
                        </Col>
                        <Col size="md-9 sm-12">
                          <p className="card-text">About the App:  {apper.synopsis}</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
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
    </div>
    );
  }
}

export default HomePage;