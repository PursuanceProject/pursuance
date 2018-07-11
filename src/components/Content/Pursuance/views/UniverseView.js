import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ForceGraphNode, ForceGraphLink, InteractiveForceGraph } from 'react-vis-force';
import { getPursuances } from '../../../../actions';

import './UniverseView.css'

const MAX_PURSUANCE_NAME_DISPLAY_LENGTH = 25;
const COLORS = ["red", "green", "blue"];

class UniverseView extends Component {

  componentWillMount() {
    // TODO: This will probably need to be tweaked after auth is added
    if (Object.values(this.props.pursuances).length === 0) {
      this.props.getPursuances();
    }
  }

  getName = (pursuance) => {
    if (pursuance.name.length <= MAX_PURSUANCE_NAME_DISPLAY_LENGTH) {
      return pursuance.name;
    }
    return pursuance.name.slice(0, MAX_PURSUANCE_NAME_DISPLAY_LENGTH+1) + '...';
  }

  renderNodes = () => {
    const { pursuances } = this.props;
    const pursuanceArr = Object.values(pursuances);
    return pursuanceArr.map((pursuance) => (
      <ForceGraphNode
        key={pursuance.id}
        node={{ id: this.getName(pursuance), radius: 16 }}
        fill={COLORS[pursuance.id % 3]}
        labelStyle={{ fontSize: 16, fill: '#eee' }}
        showLabel
      />
    ));
  }

  renderLinks = () => {
    const { pursuances } = this.props;
    const pursuanceArr = Object.values(pursuances);
    return pursuanceArr.map((pursuance) => (
      <ForceGraphLink
        key={pursuance.id}
        link={{ source: this.getName(pursuance), target: this.getName(pursuanceArr[pursuance.id % 3]) }}
        stroke="white"
      />
    ));
  }

  render() {
    return (
      <div className="content">
        <InteractiveForceGraph
          className="interactive-graph"
          simulationOptions={{ height: 600, width: 800, radiusMargin: 40, alpha: 1 }}
          zoom
          zoomOptions={{ minScale: 0.25, maxScale: 2 }}
          showLabel
          labelOffset={{
            x: () => 22,
            y: () => 6,
          }}
        >
          {this.renderNodes()}
          {this.renderLinks()}
        </InteractiveForceGraph>
      </div>
    )
  }
}

export default connect(({ pursuances }) => ({ pursuances }), { getPursuances })(UniverseView);
