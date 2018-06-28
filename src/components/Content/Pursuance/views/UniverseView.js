import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ForceGraphNode, ForceGraphLink, InteractiveForceGraph } from 'react-vis-force';
import { getPursuances } from '../../../../actions';

import './UniverseView.css'

class UniverseView extends Component {
  componentWillMount() {
    // TODO: This will probably need to be tweaked after auth is added
    if (Object.values(this.props.pursuances).length === 0) {
      this.props.getPursuances();
    }
  }

  renderNodes() {
    const { pursuances } = this.props;
    const pursuanceArr = Object.values(pursuances);
    return pursuanceArr.map((pursuance) => (
      <ForceGraphNode key={pursuance.id} node={{ id: pursuance.name, radius: 10 }} fill={(pursuance.id % 2 === 0 ? "blue" : "red")} />
    ));
  }

  renderLinks() {
    const { pursuances } = this.props;
    const pursuanceArr = Object.values(pursuances);
    return pursuanceArr.map((pursuance) => (
      <ForceGraphLink
        key={pursuance.name}
        link={{ source: pursuance.name, target: pursuanceArr[(pursuance.id % 2 === 0 ? 0 : 1)].name }}
        stroke="black"
      />
    ));
  }

  render() {
    return (
      <InteractiveForceGraph
        className="interactive-graph"
        simulationOptions={{ height: 750, width: 1000, radiusMargin: 30, alpha: 1 }}
        zoom
	      zoomOptions={{ minScale: 0.75, maxScale: 2 }}>
        {this.renderNodes()}
        {this.renderLinks()}
      </InteractiveForceGraph>
    )
  }
}

export default connect(({ pursuances }) => ({ pursuances }), { getPursuances })(UniverseView);
