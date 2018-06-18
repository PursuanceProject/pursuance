import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setCurrentPursuance } from '../../../actions';
import PursuanceMenu from './PursuanceMenu';
import TaskListView from './views/TaskListView';
import CalendarView from './views/CalendarView';
import DiscussView from './views/DiscussView';
import ParticipantsView from './views/ParticipantsView';
import RightPanel from '../RightPanel/RightPanel';
import './PursuancePage.css';

class PursuancePage extends Component {

  componentWillMount() {
    let { setCurrentPursuance, match, currentPursuanceId } = this.props;
    currentPursuanceId = Number(match.params.pursuanceId) || currentPursuanceId;
    setCurrentPursuance(currentPursuanceId);
  }

  render() {
    return (
      <Router>
        <div id="pursuance-page" className="content-ctn">
          <nav id="pursuance-nav">
            <PursuanceMenu />
          </nav>
          <article>
            <Switch>
              <Route exact path="/pursuance/:pursuanceId" component={TaskListView} />
              <Route exact path="/pursuance/:pursuanceId/tasks" component={TaskListView} />
              <Route exact path="/pursuance/:pursuanceId/calendar" component={CalendarView} />
              <Route exact path="/pursuance/:pursuanceId/discuss/task/:taskGid" component={DiscussView} />
              <Route exact path="/pursuance/:pursuanceId/participants" component={ParticipantsView} />
            </Switch>
            <RightPanel />
          </article>
        </div>
      </Router>
    );
  }
}

export default connect(({currentPursuanceId}) =>
  ({ currentPursuanceId }), {
   setCurrentPursuance
})(PursuancePage);
