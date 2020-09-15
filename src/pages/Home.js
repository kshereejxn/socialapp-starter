import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";

<<<<<<< HEAD
=======

>>>>>>> dev-branch
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
<<<<<<< HEAD
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <hr/>
        <RegistrationForm/>
=======
        <h2>Social Distancing Style Blogging</h2>
        <LoginForm />
        <hr/>
        <RegistrationForm />
>>>>>>> dev-branch
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
