import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    phrases: [
      'First paragraph',
      'Second paragraph',
      'Third paragraph'
    ],
    username: 'Camilo'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const style = {
      width: '60%',
      margin: '16px auto',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '16px',
      textAlign: 'center'
    };
    return (
      <div className="App">
        <h1 style={style}>Hello, react</h1>
        <UserInput changed={this.usernameChangedHandler} username={this.state.username} />
        <UserOutput phrase={this.state.phrases[0]} username={this.state.username} />
        <UserOutput phrase={this.state.phrases[1]} />
        <UserOutput phrase={this.state.phrases[2]} />
      </div>
    );
  }
}

export default App;
