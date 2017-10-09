import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />

          <Route exact path="/" component={HomePage} />

          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
