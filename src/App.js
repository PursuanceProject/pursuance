import React, { Component } from 'react'
import Footer from './components/Footer/Footer';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={Footer} />
        </Router>
      </div>
    );
  }
}

export default App;
