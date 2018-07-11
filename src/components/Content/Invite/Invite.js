import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import {
  getPursuances,
  getInvites,
  rpShowTaskDetails,
} from '../../../actions';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
import FaChain from 'react-icons/lib/fa/chain';
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  displayRecruitSearchResults = () => {
    return (
      <div></div>
    )
  }

  displayPermissionsSelect = () => {
    return (
      <select defaultValue="NormalUser">
        <option value="Admin">Admin</option>
        <option value="AssistantAdmin">Assistant Admin</option>
        <option value="Recruiter">Recruiter</option>
        <option value="Assigner">Assigner</option>
        <option value="NormalUser">Normal User</option>
        <option value="Viewer">Viewer</option>
        <option value="Untrusted">Untrusted</option>
      </select>
    )
  }

  displayExpireSelect = () => {
    return (
      <select defaultValue="14d">
        <option value="never">Never</option>
        <option value="30d">30 days</option>
        <option value="14d">14 days</option>
        <option value="7d">7 days</option>
        <option value="1d">1 day</option>
        <option value="10m">10 minutes</option>
      </select>
    )
  }

  addInviteUrlToClipboard = () => {
    toast.success('Added invite URL to clipboard!');
  }

  createInvite = () => {
  }

  displayInvites = (invites) => {
    return invites.map((invite) => {
      return (
        <div key={invite.id}>
          <div className="invite-purpose">
            {invite.purpose}
          </div>
          <div className="invite-permissions-level">
            {this.displayPermissionsSelect()}
            <div>
              {<FaQuestionCircle size={16} />}
            </div>
          </div>
          <div className="invite-copy-link">
            <button
              className="btn btn-primary"
              onClick={this.addInviteUrlToClipboard}
            >
              Copy Link&nbsp;
              {<FaChain size={16} />}
            </button>
            <ToastContainer
              position="top-center"
              type="success"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
            />
          </div>
          <div className="invite-delete-btn">
            <button
              className="btn btn-danger"
            >
              Delete&nbsp;
              {<FaTimesCircleO size={16} />}
            </button>
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
        <div id="invites">
          <div id="task-hierarchy-title">
            <h2 id="invite-title">Invite others to:&nbsp;</h2>
            <h2 id="pursuance-title">
              {
                pursuances[currentPursuanceId] && pursuances[currentPursuanceId].name
              }
            </h2>
          </div>
          <Tabs defaultActiveKey={1} id="invite-tabs">
            <Tab eventKey={1} title="Recruit by Skill Set">
              <div className="recruit-title">
                <h3>Recruit Volunteers by their Skill Set and Interests</h3>
              </div>
              <div id="recruit-form-skills">
                Skills:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  placeholder="Research Programming:React"
                  autoFocus
                />
              </div>
              <div id="recruit-form-interests">
                Interests:&nbsp;
                <input
                  type="text"
                  placeholder="PrisonReform Abortion:ProChoice"
                />
              </div>
              <br />
              <div className="recruit-title">
                <h4>Search Results</h4>
              </div>
              <div className="recruit-search-results">
                {this.displayRecruitSearchResults()}
              </div>
            </Tab>

            <Tab eventKey={2} title="Create Invite Links">
              <div className="invite-links">
                <h3>Create New Invite Link</h3>
              </div>
              <div id="invites-form">
                <input
                  type="text"
                  placeholder="For co-workers"
                />
                <div className="invites-invite-as">
                  Invite as:&nbsp;
                  {this.displayPermissionsSelect()}
                </div>
                <div className="invites-expire">
                  Expire after:&nbsp;
                  {this.displayExpireSelect()}
                </div>
                <button
                  className="btn btn-success"
                  onClick={this.createInvite}
                >
                  Create
                </button>
              </div>
              <div id="invite">
                <h3>Invite Links Created</h3>
                <div className="invite-links">
                  {this.displayInvites(invites)}
                </div>
              </div>
            </Tab>
          </Tabs>
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
