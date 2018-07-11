import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPursuances,
  getInvites,
  rpShowTaskDetails,
} from '../../../actions';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
import FaChain from 'react-icons/lib/fa/chain';
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o';
import './Invite.css';
import '../Content.css';

class Invite extends Component {

  componentDidMount() {
    const { getPursuances, getInvites, currentPursuanceId, pursuances } = this.props;
    if (!pursuances[currentPursuanceId]) {
      getPursuances();
    }

    getInvites({pursuanceId: currentPursuanceId});
  }

  getInvitesFromRedux = () => {
    // TEMPORARY(elimisteve): See below
    // const { currentPursuanceId, invites } = this.props;
    const { invites } = this.props;
    return Object.keys(invites)
      // TEMPORARY(elimisteve): Post-Kickstarter demo, re-add this filter line
      // .filter((id) => invites[id].pursuance_id === currentPursuanceId && id)
      .filter((id) => id)
      .map((id) => invites[id])
  }

  displayInvites = (invites) => {
    return invites.map((invite) => {
      return (
        <div key={invite.id}>
          <div className="invite-purpose">
            {invite.purpose}
          </div>
          <div className="invite-permissions-level">
            <select>
              <option name="Admin">Admin</option>
              <option name="AssistantAdmin">Assistant Admin</option>
              <option name="Recruiter">Recruiter</option>
              <option name="Assigner">Assigner</option>
              <option name="NormalUser">Normal User</option>
              <option name="Viewer">Viewer</option>
              <option name="Untrusted">Untrusted</option>
            </select>
            <div>
              {<FaQuestionCircle size={24} />}
            </div>
          </div>
          <div className="invite-copy-link">
            <div>Copy Link</div>
            <div>{<FaChain size={24} />}</div>
          </div>
          <div className="invite-delete-btn">
            <div>
              {<FaTimesCircleO size={24} />}
            </div>
          </div>
          <div className="invite-advanced">
            <a href="">Advanced</a>
          </div>
        </div>
      )
    })
  }

  render() {
    const { pursuances, currentPursuanceId } = this.props;
    const invites = this.getInvitesFromRedux();

    return (
      <div className="content">
        <div id="invite">
          <div id="task-hierarchy-title">
            <h2 id="invite-title">Invite:&nbsp;</h2>
            <h2 id="pursuance-title">
              {
                pursuances[currentPursuanceId] && pursuances[currentPursuanceId].name
              }
            </h2>
          </div>
          <div id="invite">
            {this.displayInvites(invites)}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ pursuances, currentPursuanceId, invites }) =>
  ({ pursuances, currentPursuanceId, invites }), {
    getPursuances,
    getInvites,
    rpShowTaskDetails,
})(Invite);
