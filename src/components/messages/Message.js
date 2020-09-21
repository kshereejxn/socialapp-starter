import React from"react"
class Message extends React.Component{
    render(){
        return(
            <li className="Message">
                At{this.props.createAt}, {this.props.username}posted:
                <br />
                {this.props.text}
                <div class="like-count">
                    Likes: {this.props.likes.length}
                    </div>
            </li>
        )
    }
}
export default Message