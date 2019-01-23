import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Appers from "./pages/Appers";
import AppDetail from "./pages/Detail";
import Author from "./pages/Author";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import LoginForm from "./pages/Login";
import Signup from "./pages/Signup";


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      name: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentWillMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }
  
  logOut() {
    console.log("clicked")
    axios.get("/user/logout").then((data)=>{
      window.location.pathname = "/login"
    })
  }

  getUser() {
    axios.get('/user/login').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true,
          name: response.data.user.name
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          name: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">    
          {this.state.loggedIn ? 
            (<Nav logOut={this.logOut} getUser={this.getUser} updateUser={this.updateUser} loggedIn={this.state.loggedIn} />) 
            : (console.log("Logout!!!"))
          }
          <Switch>
            <Route
              path="/login"
              render={() =>
                <LoginForm
                  updateUser={this.updateUser}
                />}
            />
            <Route
              path="/signup"
              render={() =>
                <Signup/>}
            />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/appers" component={Appers} />
            <Route exact path="/appers/:id" component={AppDetail} />
            <Route exact path="/users/:id" component={Author} />
            <Route exact path="/profile" component={Profile} />
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;




