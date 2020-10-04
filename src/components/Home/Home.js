import React from "react";

import { Link } from "react-router-dom";

import Menu from "../menu/Menu";
import { userIsNotAuthenticated } from "../../redux/HOCs";
import Login from "../loginForm/LoginForm"
import "./home.css"


class Home extends React.Component {
    render() {
        return (
          <div>

            <Login />
            <button className="registerButton">
             
            </button>
          </div>
        );
    }
}
 //<div className="hulk"></div>
export default userIsNotAuthenticated(Home);