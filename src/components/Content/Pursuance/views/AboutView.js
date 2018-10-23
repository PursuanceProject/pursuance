import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutView.css';

class AboutView extends Component {

  render() {
    const {currentPursuanceId, pursuances} = this.props;
    const p = (pursuances[currentPursuanceId] !== undefined) ?
          pursuances[currentPursuanceId] : "";
    return (
      <div className="content about">
        <h1>About This Pursuance</h1>
        <h2>Name: {p.name}</h2>
        <h4>Mission: {p.mission}</h4>
      </div>
    );
  }
}

export default connect(({ currentPursuanceId, pursuances }) =>
  ({ currentPursuanceId, pursuances })
)(AboutView);
