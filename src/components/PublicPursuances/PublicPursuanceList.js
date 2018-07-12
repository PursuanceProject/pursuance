import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postgrest from '../../api/postgrest';
import { postMembership, getMemberships, deleteMembership } from '../../actions';


class PublicPursuanceList extends Component {

  componentWillMount() {
    const { user, getMemberships } = this.props;
    getMemberships({ "user_username" : user.username });
  }

  getPublicPursuanceList = () => {
    const { user, publicPursuances, postMembership, memberships, deleteMembership } = this.props;
    const pursuanceArr = Object.values(publicPursuances);
    return pursuanceArr.map((pursuance) => (
      <div key={pursuance.id} className="pursuance-list-ctn">
        <div className="pursuance-description">
          <Link to={`/pursuance/${pursuance.id}`}>
            <h3><strong>{pursuance.name}</strong></h3>
          </Link>
          <p><strong>Mission:</strong> {pursuance.mission}</p>
          <p>Created {postgrest.formatDate(pursuance.created)}</p>
        </div>
        <div className="pursuance-join">
          {
            user.authenticated
            &&
            !memberships[pursuance.id]
            &&
            <button
              className="join-btn pursuance-btn"
              onClick={() => postMembership({
                "pursuance_id": pursuance.id,
                "user_username": user.username
              })}>
              Join
            </button>
          }
          {
            user.authenticated
            &&
            memberships[pursuance.id]
            &&
            <button
              className="leave-btn pursuance-btn"
              onClick={() => deleteMembership({
                "pursuance_id": pursuance.id,
                "user_username": user.username
              })}
              >
              Leave
            </button>
          }

        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="pursuance-list">
        {this.getPublicPursuanceList()}
      </div>
    )
  }

}

export default connect(({ publicPursuances, user, memberships }) =>
 ({ publicPursuances, user, memberships }),{
   postMembership,
   getMemberships,
   deleteMembership
})(PublicPursuanceList);
