import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import ProfileUserCard from "../profileUserCard/ProfileUserCard";
// import GetUsers from "../getusers/GetUsers";
import Navbar from "../menu/Navbar";
import {
  Segment,
  Header
} from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Navbar isAuthenticated={this.props.isAuthenticated} />
        <Header as='h1' textAlign='center'>Profile</Header>
        <Segment>
          <ProfileUserCard />
        </Segment>
        {/* <h2>Get Users</h2> */}

        {/* <GetUsers/> //not sure what this does. Commented out for now// */}
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
