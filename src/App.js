import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import PublicPursuances from './components/PublicPursuances/PublicPursuances';
import Dashboard from './components/Dashboard/Dashboard';
import PursuancePage from './components/Content/Pursuance/PursuancePage';
import NotFound from './components/NotFound/NotFound';
import CreatePursuance from './components/CreatePursuance/CreatePursuance';
import { removeNotification, addContributionPoints } from './actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route component={NavBar} />
          <Switch>
            {/* Temporary redirect from /; will use HomePage component */}
            <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/pursuance/all" component={PublicPursuances} />
            <Route exact path="/pursuance/create" component={CreatePursuance} />
            <Route path="/pursuance/:pursuanceId" component={PursuancePage} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeNotification(id){
      dispatch(removeNotification(id));
    },
    increaseContributionAmount(amount){
      dispatch(addContributionPoints(amount));
    }
  }
}

export default connect(({ user, currentPursuanceId }) => ({ user, currentPursuanceId }), mapDispatchToProps)(App);
