import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import Menu from "../menu/Menu";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


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
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
   LoaderExampleTextShorthand = () => (
    <div>
      <Segment>
        <Dimmer active>
          <Loader content='Loading' />
        </Dimmer>
  
        <Image src='/images/wireframe/short-paragraph.png' />
      </Segment>
  
      <Segment>
        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
  
        <Image src='/images/wireframe/short-paragraph.png' />
      </Segment>
    </div>
  )
  render() {
    const { loading, error } = this.props;
    return (
     <div className="menu">
                <Menu />
             
                

            
     <div className="LoginForm">
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
          <button className="loginButton"type="submit" disabled={loading}>
            Login
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);