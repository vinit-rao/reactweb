import React, {Component} from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello Amigo'
        }
    }

    changeMessage() {
        this.setState({
            message: "Thanks Bro <3"
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>looking good brochacho</button>
            </div>
        )
    }
}

export default Message