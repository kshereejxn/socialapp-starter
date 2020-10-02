import React from "react";
import { Link } from "react-router-dom";
import { Image } from 'semantic-ui-react'

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <Image as={Link} src={require('../images/404.gif')} to='/Users'/>
        404! {this.props.location.pathname}
        <Link to="/login">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
