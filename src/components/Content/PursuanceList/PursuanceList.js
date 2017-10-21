import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PursuanceList.css';
import '../Content.css';

class PursuanceList extends Component {
  render() {
    return (
      <div className="pursuance-list">

        {this.props.pursuances.map((pursuance) => (
          <div key={pursuance.id} className="">
            <h3>
              <Link to={`/${pursuance.id}/tasks/hierarchy`}>{pursuance.name}</Link>
            </h3>
            <p>{pursuance.description}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default PursuanceList;
