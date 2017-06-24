import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{textAlign: 'center'}}>
        <div className="App-header" style={{backgroundColor: '#222',
                                            height: '150px',
                                            padding: '20px',
                                            color: 'white'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" style={{fontSize: 'large'}}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
