import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import TaskDetails from './TaskDetails/TaskDetails';
import TaskList from './TaskList/TaskList';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import FaListOl from 'react-icons/lib/fa/list-ol';
import FaAlignLeft from 'react-icons/lib/fa/align-left';
import {
  toggleRightPanel,
  rpShowTaskDetails,
  rpShowTaskList
} from '../../../actions';
import './RightPanel.css';

class RightPanel extends Component {

  getTooltip = (tooltip) => {
    switch (tooltip) {
      case 'toggle-panel':
        return (
          <Tooltip id="tooltip-rp-toggle">
            <strong>
              {this.props.rightPanel.show ? 'Close Panel' : 'Open Panel'}
            </strong>
          </Tooltip>
        )
      case 'task-details':
        return (
          <Tooltip id="tooltip-rp-task-details">
            <strong>
              Task Details
            </strong>
          </Tooltip>
        )
      case 'task-list':
        return (
          <Tooltip id="tooltip-rp-task-list">
            <strong>
              Task List
            </strong>
          </Tooltip>
        )
      default:
        return null;
    }
  }

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

  getContent = () => {
    const { show, tab } = this.props.rightPanel;
    if (!show) {
      return null;
    }
    switch (tab) {
      case 'TaskDetails':
        return <TaskDetails />;
      case 'TaskList':
        return <TaskList />;
      default:
        return null;
    }
  }

  getRpClassName = (menuItem) => {
    const { show, tab } = this.props.rightPanel;
    return "rp-menu-icon " + (show && tab === menuItem ? 'Active' : '');
  }

  render() {
    const { toggleRightPanel, rpShowTaskDetails, rpShowTaskList } = this.props;

    return (
      <div className="right-panel-ctn">
        <div className="right-panel-content-ctn" style={this.getDisplay()}>
          {this.getContent()}
        </div>
        <div id="right-panel">
          <OverlayTrigger
            placement="left"
            overlay={this.getTooltip('toggle-panel')}>
            <div className="toggle-panel-ctn" onClick={toggleRightPanel}>
              {this.getArrowIcon()}
            </div>
          </OverlayTrigger>

          <div className="rp-menu-ctn">
            <OverlayTrigger
              placement="left"
              overlay={this.getTooltip('task-details')}>
              <div
                id="rp-task-details"
                className={this.getRpClassName('TaskDetails')}
                onClick={rpShowTaskDetails}
              >
                <FaAlignLeft size={28} />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left"
              overlay={this.getTooltip('task-list')}>
              <div
                id="rp-task-list"
                className={this.getRpClassName('TaskList')}
                onClick={rpShowTaskList}
              >
                <FaListOl size={28} />
              </div>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({rightPanel}) => ({rightPanel}), { toggleRightPanel, rpShowTaskDetails, rpShowTaskList })(RightPanel);
