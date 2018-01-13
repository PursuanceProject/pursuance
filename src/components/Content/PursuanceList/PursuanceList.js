import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './PursuanceList.css';
import '../Content.css';

class PursuanceList extends Component {

  getPursuanceList = () => {
    const pursuanceArr = Object.values(this.props.pursuances);
    return pursuanceArr.map((pursuance) => (
      <div key={pursuance.id} className="pursuance-list-ctn">
        <Link to={`/pursuance/${pursuance.id}`}>
          <h3><strong>{pursuance.name}</strong></h3>
        </Link>
        {pursuance.mission && <p><strong>Mission:</strong> {pursuance.mission}</p>}
      </div>
    ));
  }

  render() {
    return (
      <div className="pursuance-list">
        {this.getPursuanceList()}
      </div>
    );
  }
}

export default connect(({ pursuances }) => ({ pursuances }))(PursuanceList);
