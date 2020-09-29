import React from "react";
import Menu from "../menu/Menu";
import { userIsNotAuthenticated } from "../../redux/HOCs";
<<<<<<< HEAD:src/components/Home/Home.js

import "./home.css";
=======
import "./WelcomePage.css"
>>>>>>> katrine:src/components/welcomePage/WelcomePage.js


class WelcomePage extends React.Component {
    render() {
        return (
            <div className="hero">
            <div className="height">
            <Menu />
            <div className="background">
               
            </div>
       
            </div>
            </div>
           
           
            
        );
    }
}

export default userIsNotAuthenticated(WelcomePage);