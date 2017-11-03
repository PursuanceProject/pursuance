import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import PursuancePage from './components/Pursuance/PursuancePage';
import NotFound from './components/NotFound/NotFound';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar 
            authenticated={ this.props.authenticated } 
            username={ this.props.username } />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/pursuance/:pursuanceId" component={PursuancePage} />
            <Route path="/*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps)(App);
