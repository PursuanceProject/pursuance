import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PublicPursuanceList extends Component {
  
  getPublicPursuanceList = () => {
    const pursuanceArr = Object.values(this.props.publicPursuances);
    return pursuanceArr.map((pursuance) => (
      <div key={pursuance.id} className="pursuance-list-ctn">
        <Link to={`/pursuance/${pursuance.id}`}>
          <h3>{pursuance.name}</h3>
        </Link>
				<p>Created { pursuance.created }</p>
        {pursuance.mission && <p><strong>Mission:</strong> {pursuance.mission}</p>}
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