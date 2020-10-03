import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import { userIsNotAuthenticated } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div className="Menu">
        <h1>Super-Book</h1>
        
        {this.props.userIsNotAuthenticated && (
          <div className="login-signup">
            <button>
              <Link className="login" to="/login">
                login
              </Link>
            </button>
            <button>
              <Link className="signUp" to="/Registration">
                sign up
              </Link>
            </button>
          </div>
        )}

        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link className="Home" to="/">Home</Link>
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
