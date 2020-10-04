import "antd/dist/antd.css"
import {Avatar} from "antd"
import React from "react"
import DataService from "../services/dataService"
import ProfilePicChanger from "../profile/ProPicChanger"
import blackwidow from "../profile/pics/blackwidow.jpg";
import batman from "../profile/pics/batman.jpg";
import spiderman from "../profile/pics/spiderman.jpg";

import starfire from "../profile/pics/starfire.jpg";
import wonderwoman from "../profile/pics/wonderwoman.jpg";
import greenlanturn from "../profile/pics/greenlanturn.jpg";
import poisonivy from "../profile/pics/poisonivy.jpg";

import hulk from "../profile/pics/hulk.jpg";

class ProfilePic extends React.Component{
constructor(props){
  super(props);
  this.client = new DataService()
  this.state = {
    profileImage: `https://socialapp-api.herokuapp.com/users/${this.client.getUserName()}/picture`
  }
}
handleImageChange = (profileImage) =>{
  this.setState({
    profileImage
  })
}
render (){
  return (
    <div className="profilePicture">
      <h3>Hello user </h3>
      <Avatar size={164} icon="user" src={this.state.profileImage} />
      <ProfilePicChanger
        handleImageChange={this.handleImageChange}
        batman={batman}
        starfire={starfire}
        wonderwoman={wonderwoman}
        blackwidow={blackwidow}
        greenlanturn={greenlanturn}
        poisonivy={poisonivy}
        hulk={hulk}
        spiderman={spiderman}
      />
      
    </div>
  );
};
};
export default ProfilePic;
