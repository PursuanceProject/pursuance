import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './PursuanceList.css';
import '../Content.css';

class PursuanceList extends Component {

  getPursuanceList = () => {
    const { memberships, pursuances } = this.props;
    const membershipsArr = Object.values(memberships);
    return membershipsArr.map((membership) => {
      const pursuance = pursuances[membership.pursuance_id];
      if (!pursuance) {
        return null;
      }
        return (
          <div key={pursuance.id} className="pursuance-list-ctn">
            <div className="pursuance-description">
              <Link to={`/pursuance/${pursuance.id}`}>
                <h3><strong>{pursuance.name}</strong></h3>
              </Link>
              <p><strong>Mission:</strong> {pursuance.mission}</p>
            </div>
          </div>
        )
    })
  }

  render() {
    return (
      <div className="pursuance-list">
        {this.getPursuanceList()}
      </div>
    );
  }
}

export default connect(({ memberships, pursuances }) => ({ memberships, pursuances }))(PursuanceList);
