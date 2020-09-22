import React from "react";
<<<<<<< HEAD
import ProfileUserCard from "../../components/profileUserCard/ProfileUserCard";
import Menu from "../menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";
=======
import Menu from "../menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";
import ProfileUserCard from "../profileUserCard/ProfileUserCard";
>>>>>>> 46ec1dac4f5a93e953109e86110e4d31cdb19240

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <ProfileUserCard />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
