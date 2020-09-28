import React from"react"
import "./Message.css"
import DataService from "../services/dataService"
class Message extends React.Component{

    state = { likeCount: this.props.likes.length }
    
    handleLike = () => {
        const dataService = new DataService()
        const username = dataService.getUserName()
        if (this.props.likes.some(like => like.username === username)) return
            DataService
            .postLike(this.props.id)
            .then(like => {
                console.log(like)
                this.setState(latestState => ({ likeCount: latestState.likeCount+ 1}))
            })
        
        console.log(this.props.likes)
    }    
    render(){
        return(
            <li className="Message">
                At{this.props.createAt}, {this.props.username}posted:
                <br />
                {this.props.text}
                <div class="like-count">
                    Likes: {this.state.likeCount}
                    </div>
                    <button onClick={this.handleLike}><span role="img" aria-label="Like">like</span></button>
            </li>
        )
    }
}
export default Message