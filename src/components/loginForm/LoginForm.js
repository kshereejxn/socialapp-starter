import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "../loginForm/LoginForm.css";
import {
  Segment, Button
} from 'semantic-ui-react';
import Navbar from "../menu/Navbar"
// import { Link } from "react-router-dom";






class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.client.login(this.state).then (result => {alert (result.data)})
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div >
        <Navbar/>
      {/* <Header textAlign="center" as='h1'>SUPER BOOK</Header> */}
      <div  className="container"></div>

      <Segment className="LoginForm">
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <Button className="loginButton" type="submit" disabled={loading}>
            Login
            </Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </Segment>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);