import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import TaskDetails from './TaskDetails/TaskDetails';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import './RightPanel.css';

class RightPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPanel: false
    };
  }

  getTooltip = () => (
    <Tooltip id="tooltip-bell">
      <strong>
        {this.state.showPanel ? 'Close Panel' : 'Open Panel'}
      </strong>
    </Tooltip>
  );

  togglePanel = () => {
    this.setState({
      ...this.state,
      showPanel: !this.state.showPanel
    });
  }

  getArrowIcon = () => {
    if (this.state.showPanel) {
      return <FaAngleDoubleRight size={28} />;
    } else {
      return <FaAngleDoubleLeft size={28} />;
    }
  }

  getDisplay = () => {
    if (this.state.showPanel) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  }

  render() {
    return (
      <div className="right-panel-ctn">
        <div className="right-panel-cotent-ctn" style={this.getDisplay()}>
          {/* <TaskDetails /> */}
        </div>
        <div id="right-panel">
          <OverlayTrigger
            placement="left"
            overlay={this.getTooltip()}>
            <div className="toggle-panel-ctn" onClick={this.togglePanel}>
              {this.getArrowIcon()}
            </div>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}

export default RightPanel;
