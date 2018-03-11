import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPursuancesByIds } from '../../../../actions';

const showPursuanceInfo = (id, pursuances) => {
  let currentPursuance = pursuances[id]
  if (currentPursuance !== undefined) {
    return currentPursuance.mission;
  }
}

class AboutView extends Component {

  componentWillMount() {
    this.props.getPursuancesByIds([this.props.currentPursuanceId]);
  }

  render() {
    const {currentPursuanceId, pursuances} = this.props;
    return (
      <div>
        <h2>Mission</h2>
        <h2>{showPursuanceInfo(currentPursuanceId, pursuances)}</h2>
      </div>
    );
  }
}

export default connect(({currentPursuanceId, pursuances}) =>
  ({currentPursuanceId, pursuances}), {
    getPursuancesByIds
  })(AboutView);