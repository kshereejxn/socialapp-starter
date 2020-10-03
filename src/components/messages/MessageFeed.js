import React from "react"
import Message from "../messages/Message"
import Menu from "../menu/Menu"
import BackendService from "../services/dataService"
import "./messageFeed.css"
import { userIsAuthenticated } from "../../redux/HOCs";
class MessageFeed extends React.Component {
    state = { messages: [] }
    componentDidMount (){
        new BackendService().getRecentMessages().then(messages => {
            this.setState({ messages})
        })

    }

render (){
if (this.state.messages.length === 0){
return (
  <div className="MessageFeed">
    <Menu isAuthenticated={this.props.isAuthenticated} />
    <h1>Message Feed</h1>
    <h3>loading...</h3>
  </div>
);
}
return (
  <div className="MessageFeed">
    <Menu isAuthenticated={this.props.isAuthenticated} />
    <h1>Message Feed</h1>
    <ul>
      {this.state.messages.map((msg) => (
        <Message key={msg.id} {...msg} />
      ))}
    </ul>
  </div>
);
}
}

export default userIsAuthenticated (MessageFeed);