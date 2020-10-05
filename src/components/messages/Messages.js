import React from "react";
import DataService from "../../services/DataService";



class Messages extends React.Component {

    state = { likeCount: this.props.likes.length }

    handleLike = () => {
        const dataService = new DataService()
        const username = dataService.getUsername()

        if (this.props.likes.some(like => like.username === username)) 
        
        return

        dataService
            .postLike(this.props.id)
            .then(like => {
                console.log(like)
                this.setState(latestState => ({ likeCount: latestState.likeCount + 1 }))
            })
            console.log(this.props.likes)
    }
    render() {
        return (
            <li className="Messages">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
                <div className="like-count">
                    Likes: {this.state.likeCount}
                    </div>
                    <button onClick={this.handleLike}><span role="img" aria-label="Like"> 👍 </span></button>
            </li>
        )
    }
}
export default Messages; 