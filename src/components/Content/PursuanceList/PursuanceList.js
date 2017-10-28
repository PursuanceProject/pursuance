import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PursuanceList.css';
import '../Content.css';
import { connect } from 'react-redux';

class PursuanceList extends Component {
  render() {
    const pursuanceArr = Object.values(this.props.pursuances);
    return (
      <div className="pursuance-list">

        {pursuanceArr.map((pursuance) => (
          <div key={pursuance.id} className="">
            <h3>
              <Link to={`/pursuance/${pursuance.id}`}>{pursuance.name}</Link>
            </h3>
            <p>{pursuance.description}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default connect(({ pursuances }) => ({ pursuances }))(PursuanceList);
