import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import axios from 'axios'
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Appers extends Component {

  constructor() {
    super()
    this.state = {
      appers: [],
      name: "",
      author: "",
      synopsis: "",
      githublink: "",
      deploylink: "",
      pic: ""
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount = () => {
    this.loadAppers();
    this.getUser();
  }

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
        });
        this.state.author = response.data.user.name;
    } else {
        console.log('Get user: no user');
        window.location.pathname = "/login"
    }
    })
  }

  loadAppers = () => {
    console.log("in load appers")
    API.getAppers()
      .then(res => {
           console.log("***** res")
           console.log(res)
           this.setState({appers: res.data, name: "", synopsis: "", githublink: "", deploylink: "", pic: "" })
        } 
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
    if (this.state.name && this.state.githublink && this.state.deploylink) {
      API.saveApper({
        name: this.state.name,
        author: this.state.author,
        synopsis: this.state.synopsis,
        githublink: this.state.githublink,
        deploylink: this.state.deploylink,
        pic: this.state.pic
      })
        .then(res => this.loadAppers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>

        <Jumbotron>
          <h1 style={{textAlign: "center"}}>INTRODUCE NEW APP</h1>
          <form>
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Name (required)"
            />
            {/* <Input
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="Author (required)"
            /> */}
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
              value={this.state.pic}
              onChange={this.handleInputChange}
              name="pic"
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

      </Container>
    );
  }
}

export default Appers;
