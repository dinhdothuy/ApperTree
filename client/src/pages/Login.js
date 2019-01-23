import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

const divStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
const panelStyle = {
    backgroundColor: 'rgb(128,128,128,0.9)',
    border: 0,
    padding: 20,
    width: 350,
    margin: 20
  };
  
const buttonStyle = {
    marginBottom: 10
  };


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: "/"
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Container>
                    <div style={{textAlign: "center", color: "green", marginTop: 30}}>
                        <h1>APPER TREE</h1>
                    </div>
                    <Row>
                        <Col size="md-4">
                            <img src="../images/background.jpg" alt="appertree" style={{width: 400}}/>
                        </Col>
                        <Col size="md-4" style={divStyle}>
                            <form style={panelStyle}>
                                <Input
                                    placeholder="email"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                <Input
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <FormBtn style={buttonStyle}
                                    disabled={!(this.state.email && this.state.password)}
                                    onClick={this.handleSubmit}
                                >
                                    Login
                                </FormBtn>
                                <p style={{ color: "white", marginBottom: 10 }}>Or sign up <Link to="/signup"><strong>here</strong></Link></p>
                            </form>
                        </Col>
                        <Col size="md-4">
                            <img src="../images/background.jpg" alt="appertree" style={{width: 400}}/>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}

export default LoginForm
