import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PursuanceMenu from './PursuanceMenu';
import TaskListView from './views/TaskListView';
import './PursuancePage.css';

class PursuancePage extends Component {

  render() {
    return (
      <Router>
        <div className="pursuance-page">
          <nav id="pursuance-nav">
            <PursuanceMenu
              pursuanceId={this.props.match.params.pursuanceId} />
          </nav>
          <article>
            <Switch>
              <Route exact path="/pursuance/:pursuanceId" component={TaskListView} />
              <Route exact path="/pursuance/:pursuanceId/tasks" component={TaskListView} />
            </Switch>
          </article>
        </div>
      </Router>
    );
  }

}

export default PursuancePage;
