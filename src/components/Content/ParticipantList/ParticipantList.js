import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from "../../../actions";
import Participant from './Participant/Participant';
import './Participant/Participant.css'

class ParticipantList extends React.Component {
  componentWillMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  renderList() {
    const { users } = this.props;
    const participants = [];

    for(const key in users) {
      const { username } = users[key];
      participants.push(<Participant key={username} username={username} />);
    }

    return participants;
  }

  render() {
    return <div className="content">
      <div id="participant-list">
        {this.renderList()}
      </div>
    </div>
  }
}

export default connect(({ pursuances, currentPursuanceId, users }) =>
  ({ pursuances, currentPursuanceId, users }), {
  getUsers
})(ParticipantList);
