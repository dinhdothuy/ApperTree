import React, { Component } from "react";
import axios from 'axios'
import { Col, Row, Container } from "../components/Grid";

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: null
        }

        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
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
            })
        } else {
            console.log('Get user: no user');
            window.location.pathname = "/login"
        }
        })
    }

    render() {
        return (
            <div className="Profile">
                <Container>
                    <div className="card" style={{marginBottom: 20}}>
                        <div className="card-header" style={{textAlign: "center", color: "green"}}>
                            <h1>{this.state.name}     <i className="fa fa-pencil-square-o" aria-hidden="true"></i></h1>
                        </div>
                        <div className="card-body">
                            <Row>
                                <Col size="md-4">
                                    <img className="card-img-top img-thumbnail" 
                                        src={this.state.avatar} 
                                        alt={this.state.name} 
                                        style={{marginBottom: 20}}
                                    />
                                </Col>
                                <Col size="md-8">
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
                                        <a target="blank" href={this.state.linkedin} style={{color: "black"}}>
                                            My LinkedIn
                                        </a>
                                    </p>
                                    <p><i className="fa fa-thumbs-up fa-fw" style={{marginRight: 20}}></i>Skills:</p>
                                    <p>{this.state.aboutMe}</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="card-footer">
                        <h4 style={{textAlign: "center", color: "green"}}>{this.state.name}'s Apps:</h4>
                        <img className="card-img-top" src="https://storage.googleapis.com/sales.appinst.io/2017/03/appinstitute-restaurant-brand.png" alt={this.state.name} />
                        </div>            
                    </div>
                </Container>
            </div>
        );
    }
}

export default Profile;