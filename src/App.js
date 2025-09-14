import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';


class App extends Component {
  render () {
    return (
      <div className='App'>
          {/* <Counter /> */}
          <ParentComponent />
      </div>
    )
  }
}

export default App;