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

    return Object.keys(users).sort().reduce((acc, key) => {
      const { username } = users[key];
      return acc.concat(<Participant username={username} />)
    }, []);
  }

  render() {
    return <div className="content-ctn">
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