import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setCurrentPursuance } from '../../actions';
import PursuanceMenu from './PursuanceMenu';
import TaskListView from './views/TaskListView';
import DiscussView from './views/DiscussView';
import './PursuancePage.css';

class PursuancePage extends Component {

  componentWillMount() {
    const { setCurrentPursuance, match } = this.props;
    const currentPursuanceId = Number(match.params.pursuanceId);
    setCurrentPursuance(currentPursuanceId);
  }

  render() {
    return (
      <Router>
        <div className="pursuance-page">
          <nav id="pursuance-nav">
            <PursuanceMenu />
          </nav>
          <article>
            <Switch>
              <Route exact path="/pursuance/:pursuanceId" component={TaskListView} />
              <Route exact path="/pursuance/:pursuanceId/tasks" component={TaskListView} />
              <Route exact path="/pursuance/:pursuanceId/discuss" component={DiscussView} />
            </Switch>
          </article>
        </div>
      </Router>
    );
  }

}

export default connect(null, { setCurrentPursuance })(PursuancePage);
