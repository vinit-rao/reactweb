import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'

class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* <Welcome /> */}
        {/* <Greet name="Vinit"/>
        <Greet name="John Doe"/> */}
        {/* <Hello /> */}
        {/* <Welcome name="Vinit"/> */}
        <Message />
      </div>
    )
  }
}


export default App;
