import React from "react";
import { Button, Form } from "semantic-ui-react";
import DataService from "../services/dataService"
class PostMessage extends React.Component {
 
    constructor(props) {
   
    super(props);
    this.client = new DataService();
    this.state = {
      
      text: "",
      submitted: false
    };
  }
  handlePostMessage = (event) => {
    event.preventDefault();
    this.client.postMessage(this.state.text)
        const form = document.getElementById("message");
      form.value=""
      this.setState({submitted: true})
      
    }
   
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <h4>Whats on your Super mind?</h4>
        <Form className="PostMessage" onSubmit={this.handlePostMessage}>
          <input
            id="message"
            type="text"
            name="text"
            required onChange={this.handleChange}
          />
          <Button type="submit">Post</Button>
        </Form>
      </div>
    );
  }
}
export default PostMessage;
