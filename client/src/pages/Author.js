import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class Author extends Component {
    state = {
        user: {}
    };
    // When this component mounts, grab the user with the _id of this.props.match.params.id
    // e.g. localhost:3000/appers/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getUser(this.props.match.params.id)
        .then(res => {
            console.log(res);
            this.setState({ user: res.data })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
        <Container>
            <div className="card" style={{marginBottom: 20}}>
                <div className="card-header" style={{textAlign: "center", color: "green"}}>
                    <h1>{this.state.user.name}     <i className="fa fa-pencil-square-o" aria-hidden="true"></i></h1>
                </div>
                <div className="card-body">
                    <Row>
                        <Col size="md-4">
                            <img className="card-img-top img-thumbnail" 
                                src={this.state.user.avatar} 
                                alt={this.state.user.name} 
                                style={{marginBottom: 20}}
                            />
                        </Col>
                        <Col size="md-8">
                            <p><i className="fa fa-address-card-o fa-fw" style={{marginRight: 20}}></i>{this.state.user.jobPosition}</p>
                            <p><i className="fa fa-home fa-fw" style={{marginRight: 20}}></i>{this.state.user.location}</p>
                            <p><i className="fa fa-phone fa-fw" style={{marginRight: 20}}></i>{this.state.user.phone}</p>
                            <p>
                                <i className="fa fa-envelope fa-fw" style={{marginRight: 20}}></i>
                                <a href={`mailto:${this.state.user.email}`}>{this.state.user.email}</a>
                            </p>
                            <p><i className="fa fa-github fa-fw" style={{marginRight: 20}}></i>
                                <a target="blank" href={this.state.user.github} 
                                    style={{color: "black"}}>
                                    My Github
                                </a>
                            </p>
                            <p><i className="fa fa-linkedin fa-fw" style={{marginRight: 20}}></i>
                                <a target="blank" href={this.state.user.linkedin} style={{color: "black"}}>
                                    My LinkedIn
                                </a>
                            </p>
                            <p><i className="fa fa-thumbs-up fa-fw" style={{marginRight: 20}}></i>Skills:</p>
                            <p>{this.state.user.aboutMe}</p>
                        </Col>
                    </Row>
                </div>
                <div className="card-footer">
                <h4 style={{textAlign: "center", color: "green"}}>{this.state.user.name}'s Apps:</h4>
                <img className="card-img-top" src="https://storage.googleapis.com/sales.appinst.io/2017/03/appinstitute-restaurant-brand.png" alt={this.state.name} />
                </div>            
            </div>  
        </Container>
        );
    }
}

export default Author;
