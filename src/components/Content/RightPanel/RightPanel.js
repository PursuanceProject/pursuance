import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import TaskDetails from './TaskDetails/TaskDetails';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import { toggleRightPanel } from '../../../actions';
import './RightPanel.css';

class RightPanel extends Component {

  getTooltip = () => (
    <Tooltip id="tooltip-bell">
      <strong>
        {this.props.rightPanel.show ? 'Close Panel' : 'Open Panel'}
      </strong>
    </Tooltip>
  );

  getArrowIcon = () => {
    if (this.props.rightPanel.show) {
      return <FaAngleDoubleRight size={28} />;
    } else {
      return <FaAngleDoubleLeft size={28} />;
    }
  }

  getDisplay = () => {
    if (this.props.rightPanel.show) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  }

  render() {
    return (
      <div className="right-panel-ctn">
        <div className="right-panel-content-ctn" style={this.getDisplay()}>
          <TaskDetails />
        </div>
        <div id="right-panel">
          <OverlayTrigger
            placement="left"
            overlay={this.getTooltip()}>
            <div className="toggle-panel-ctn" onClick={this.props.toggleRightPanel}>
              {this.getArrowIcon()}
            </div>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}

export default connect(({rightPanel}) => ({rightPanel}), { toggleRightPanel })(RightPanel);
