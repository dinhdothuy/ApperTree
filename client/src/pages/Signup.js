import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";

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

class Signup extends Component {
	constructor() {
		super()
		this.state = {
            name: '',
            email: '',
			password: '',
            aboutMe: '',
            jobPosition: '',
	        location: '',
	        phone: '',
            github: '',
            linkedin: '',
			avatar: '',
			redirect: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }
    
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
    }
    
	handleSubmit(event) {
		console.log('sign-up handleSubmit, email: ')
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/signup', {
            name: this.state.name,
			email: this.state.email,
            password: this.state.password,
            aboutMe: this.state.aboutMe,
            jobPosition: this.state.jobPosition,
	        location: this.state.location,
	        phone: this.state.phone,
            github: this.state.github,
            linkedin: this.state.linkedin,
            avatar: this.state.avatar,
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup');
					this.setState({ //redirect to login page
						redirect:true
					});
				} else {
					console.log('email already taken');
				}
			}).catch(error => {
				console.log('signup error: ');
				console.log(error);
			})
	}

render() {
	if(!this.state.redirect){
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
					<form style={panelStyle} >
						<Input
							placeholder="Name"
							id="username"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
						/>
						<Input
							placeholder="Email"
							type="email"
							id="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<Input
							placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<Input
							placeholder="Job Position"
							name="jobPosition"
							value={this.state.jobPosition}
							onChange={this.handleChange}
						/>
						<Input
							placeholder="My current city and state"
							name="location"
							value={this.state.location}
							onChange={this.handleChange}
						/>
						<Input
							placeholder="Phone"
							name="phone"
							value={this.state.phone}
							onChange={this.handleChange}
						/>
						<Input
							placeholder="My Github link"
							name="github"
							value={this.state.github}
							onChange={this.handleChange}
						/>
						<Input
							placeholder="My LinkedIn link"
							name="linkedin"
							value={this.state.linkedin}
							onChange={this.handleChange}
						/>
						<Input
							placeholder="Avatar link"
							name="avatar"
							value={this.state.avatar}
							onChange={this.handleChange}
						/>
						<TextArea
							placeholder="Skills"
							type="text"
							name="aboutMe"
							value={this.state.aboutMe}
							onChange={this.handleChange}
						/>
						<FormBtn style={buttonStyle}
							disabled={!(this.state.email && this.state.password)}
							onClick={this.handleSubmit}
						>
							Sign Up
						</FormBtn>
						<p style={{ color: "white", marginBottom: 10 }}>Or login <Link to="/login"><strong>here</strong></Link></p>
					</form>
				</Col>
				<Col size="md-4">
					<img src="../images/background.jpg" alt="appertree" style={{width: 400}}/>
				</Col>
			</Row>
        </Container>

	)
}
	else
		{
		return(
			<Redirect to="/login" />
		)
}
}
}

export default Signup
