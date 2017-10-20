import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import TaskHierarchy from './components/TaskHierarchy/TaskHierarchy';
import NotFound from './components/NotFound/NotFound';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/:pursuance_id/tasks/hierarchy" component={TaskHierarchy} />
            <Route path="/*" component={NotFound} />
          </Switch>
          <Route path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
