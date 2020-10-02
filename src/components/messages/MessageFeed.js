import React from "react"
import Message from "../messages/Message"
import DataService from "../services/DataService"
import Navbar from "../menu/Navbar"
import {
     Grid,
     Header,
     Segment
} from "semantic-ui-react";



class MessageFeed extends React.Component {
    state = { messages: [] }
    componentDidMount (){
        new DataService().getRecentMessages().then(messages => {
            this.setState({ messages})
        })

    }

    render (){
        if (this.state.messages.length === 0){
        return(
                <div className="MessageFeed">

                <h1>Message Feed</h1>
                <h3>loading...</h3>
                </div>
        )
        }
        return (
            <div className="MessageFeed">
                <Navbar/>
                <Header as='h1' textAlign='center'>Message Feed</Header>
                <Segment>
                <Grid columns={3} divided>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>

                    {this.state.messages.map(msg => (
                    <Message key={msg.id}{...msg}/>
                        ))}
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid>
                </Segment>
            </div>
        )
    }
}

export default MessageFeed;





