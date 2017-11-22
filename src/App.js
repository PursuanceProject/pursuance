import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import PursuancePage from './components/Pursuance/PursuancePage';
import NotFound from './components/NotFound/NotFound';
import DiscussView from './components/Pursuance/views/DiscussView';
import CreatePursuance from './components/CreatePursuance/CreatePursuance';
import { removeNotification, addContributionPoints } from './actions';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar
            authenticated={ this.props.authenticated }
            contributionPoints={ this.props.contributionPoints }
            username={ this.props.username }
            onRemoveNotification={this.props.removeNotification}
            onIncreaseContributionAmount={this.props.increaseContributionAmount}
            />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/pursuance/create" component={CreatePursuance} />
            <Route exact path="/pursuance/:pursuanceId" component={PursuancePage} />
            <Route path="/pursuance/:pursuanceId/discuss" component={DiscussView}/>
            <Route path="/*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
