import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postgrest from '../../api/postgrest';


class PublicPursuanceList extends Component {

  getPublicPursuanceList = () => {
    const pursuanceArr = Object.values(this.props.publicPursuances);
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
          <button className="join-btn">
            Join
          </button>
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

export default connect(({ publicPursuances }) => ({ publicPursuances }))(PublicPursuanceList);
