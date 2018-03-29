import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutView.css';

class AboutView extends Component {

  render() {
    const {currentPursuanceId, pursuances} = this.props;
    const p
    = (pursuances[currentPursuanceId] !== undefined)
    ? pursuances[currentPursuanceId] : "";
    return (
      <div className="about">
        <h1>{p.name}</h1>
        <h2>{p.mission}</h2>
        <h2>{p.about}</h2>
      </div>
    );
  }
}

export default connect(({currentPursuanceId, pursuances}) =>
  ({ currentPursuanceId, pursuances})
  )(AboutView);