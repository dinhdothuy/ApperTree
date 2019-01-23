import React, { Component } from "react";
import axios from 'axios'
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      appers: [],
      users: [],
      name: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.getUser();
    this.loadAppers();
    this.loadUsers();
  }

  loadAppers = () => {
    console.log("in load appers")
    API.getAppers()
      .then(res => {
           console.log("***** res")
           console.log(res)
           this.setState({appers: res.data})
        } 
    )
      .catch(err => console.log(err));
  };

  loadUsers = () => {
    console.log("in load users")
    API.getUsers()
      .then(res => {
           console.log("***** res")
           console.log(res)
           this.setState({users: res.data})
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

          <Col size="md-3">
            <div className="card" style={{marginBottom: 10}}>
              <div className="card-header" style={{textAlign: "center"}}>
                <h4 style={{color: "green", marginBottom: 10}}>Hello, {this.state.name}!</h4>
                <img className="card-img-top img-thumbnail" src={this.state.avatar} alt={this.state.name} />
              </div>
              <div className="card-body">
                <p><i className="fa fa-address-card-o fa-fw" style={{marginRight: 20}}></i>{this.state.jobPosition}</p>
                <p><i className="fa fa-home fa-fw" style={{marginRight: 20}}></i>{this.state.location}</p>
                <p><i className="fa fa-phone fa-fw" style={{marginRight: 20}}></i>{this.state.phone}</p>
                <p><i className="fa fa-envelope fa-fw" style={{marginRight: 20}}></i>{this.state.email}</p>
                <p><i className="fa fa-github fa-fw" style={{marginRight: 20}}></i>
                  <a target="blank" href={this.state.github} 
                    style={{color: "black"}}>
                    My Github
                  </a>
                </p>
                <p><i className="fa fa-linkedin fa-fw" style={{marginRight: 20}}></i>
                  <a target="blank" href={this.state.linkedin} 
                    style={{color: "black"}}>
                    My LinkedIn
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <p><i className="fa fa-thumbs-up fa-fw" style={{marginRight: 20}}></i>Skills:</p>
                <p>{this.state.aboutMe}</p>
              </div>          
            </div>
          </Col>

          <Col size="md-7 sm-12">
            <h4 
              style={{backgroundColor: "lightgray", color: "white", padding: 10, marginTop: 2, textAlign: "center"}}>
              Apps Community
            </h4>
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
                          <Col size="md-4 sm-12">
                            <img className="card-img-top" src={apper.pic} alt={apper.name} />
                          </Col>
                          <Col size="md-8 sm-12">
                            <p className="card-text"><strong>About the App:</strong>  {apper.synopsis}</p>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-2">

            <div className="card" style={{marginBottom: 10, textAlign: "center"}}>
              <div className="card-header">
                <h5 style={{color: "green"}}>Hot app!</h5>
              </div>
              <div className="card-body">
                <img className="card-img-top img-thumbnail" 
                  src="https://dinhdothuy.github.io/Main-portfolio/images/Sucky-Number.png" 
                  alt="hotapp" 
                  style={{marginBottom: 20}}
                />
                <p><strong>Sucky Numbers</strong></p>
                <p>Best app for your lotery number</p>
                <button className="btn btn-success">Download</button>  
              </div>         
            </div>

            <div className="card" style={{marginBottom: 10, textAlign: "center"}}>
              <div className="card-header">
                <h5 style={{color: "green"}}>Most download app!</h5>
              </div>
              <div className="card-body">
                <img className="card-img-top img-thumbnail" 
                  src="https://dinhdothuy.github.io/Main-portfolio/images/touch-me.png" 
                  alt="hotapp" 
                  style={{marginBottom: 20}}
                />
                <p><strong>Touch Me</strong></p>
                <p>Best app to photoshop yourself</p>
                <button className="btn btn-success">Download</button>  
              </div>     
            </div>

          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default HomePage;