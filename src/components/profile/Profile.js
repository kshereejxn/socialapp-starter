import React from "react";
import Menu from "../menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";
import ProfileUserCard from "./ProfileUserCard";
import "./profile.css"




class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        
        <ProfileUserCard />
      
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
