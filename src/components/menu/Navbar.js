import React, { Component } from "react";
import {
Menu,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withAsyncAction } from "../../redux/HOCs";


class NavBar extends Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {

    return (
      <div>
        <Menu style={{backgroundColor:"Lightblue"}}  pointing>

          <Menu.Item >
           SUPER BOOK
          </Menu.Item>
          <Menu.Item
            as={Link}
            name="Home"
            active={this.props.path==="/"}
            to="/login"
          />
          <Menu.Item
            name="profile"
            as={Link}
            active={this.props.path==="/profile"}
            to="/profile/:username"
          />
          <Menu.Item
            as={Link}
            name="messagefeed"
            active={this.props.path==="/messagefeed"}
            to="/messagefeed"
          />
          <Menu.Menu position='right'>
            <Menu.Item
                name="logout"
                as={Link}
                onClick={this.handleLogout}
                active={this.props.path==="/login"}
                to="/login"
            />
          </Menu.Menu>
        </Menu>

      </div>
    );
  }
}

// export default NavBar;

export default withAsyncAction("auth", "logout")(NavBar);