import React from "react";

import Menu from "../menu/Menu";
import { userIsNotAuthenticated } from "../../redux/HOCs";

<<<<<<< HEAD

import "./home.css"
=======
import "./Home.css"

>>>>>>> 5dcafe9ad3dfe9bcc90d2cefa1fc57add45754b7

class Home extends React.Component {
    render() {
        return (
<<<<<<< HEAD
            <div className="Home">
                <Menu />
                
                
                
                <div className="homepagestuff">
                    <div className="content">
                    </div>
                </div>
=======
            <div className="hero">
            <div className="test">
            <Menu />
            <div className="homepagestuff">
               
            </div>
       
            </div>
            </div>
           
>>>>>>> 5dcafe9ad3dfe9bcc90d2cefa1fc57add45754b7
           
            
        );
    }
}
 //<div className="hulk"></div>
export default userIsNotAuthenticated(Home);