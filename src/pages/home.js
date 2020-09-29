import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";

import "./home.css"


class Home extends React.Component {
  render() {
    return (
     
      <div className="Home">
        <Menu />
        
        <LoginForm />
        <hr/>
        <RegistrationForm />
      </div>
      
    );
  }
}

export default userIsNotAuthenticated(Home);
