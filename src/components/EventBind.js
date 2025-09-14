import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            message: 'goodbye'
        })
        console.log(this)
    }

    clickHandler = () => {
        this.setState({
            message: 'goodbye'
        })
    }
    render() {
        return (
            <div style={{ color: 'white' }}>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click2</button> */}
                <button onClick={this.clickHandler}>clickme</button>
            </div>
        )
    }
}

export default EventBind