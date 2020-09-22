import React from "react";
import { Button } from "semantic-ui-react";
import AlmostTwitterService from "../../almostTwitterService";


class DeleteAccount extends React.Component {


  DeleteUser = event => {
    const confirmed = window.confirm(
      "Are you sure?"
    );
    if (confirmed) {
      return this.client.delete
    }
    this.client = new AlmostTwitterService();
  };

  render() {
    return (
      <React.Fragment>
        {this.props.username === this.props.loggedInUsername && (
          <Button
            basic color ='red'
            onClick={this.client}>Delete Account</Button>
        )}
      </React.Fragment>
    );
  }
}
export default DeleteAccount
