import React, { Component } from 'react'
// eventhandler for class components
class ClassClick extends Component {
    clickHandler() {
        console.log('Clicked')
    }
    
  render() {
    return (
        <div style={{ color: 'white' }}>
            <button onClick={this.clickHandler}>
                Click Me
            </button>
        </div>
    )
  }
}

export default ClassClick