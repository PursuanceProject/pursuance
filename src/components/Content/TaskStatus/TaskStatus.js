import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import TiPencil from 'react-icons/lib/ti/pencil';
import './TaskStatus.css';


const VALID_STATUSES = [
  'New',
  'Started',
  'WorkingOn',
  'HelpWanted',
  'ReadyForReview',
  'Reviewing',
  'Done'
];

const STATUS_IMAGES = {
  'WorkingOn': true,
}

class TaskStatus extends Component {

  displayStatus = (status) => {
    return status.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  getCurrentStatus = () => {
    return this.displayStatus(this.props.status);
  }

  getDropDownItems = () => {
    // eslint-disable-next-line
    return VALID_STATUSES.map((statusName, i) => {
      if (statusName !== this.props.status) {
        return (
          <MenuItem eventKey={i} key={statusName}
            onClick={() => this.selectStatus(statusName)}>
            {this.displayStatus(statusName)}
          </MenuItem>
        );
      }
    });
  }

  selectStatus = (status) => {
    const { gid, patchTask } = this.props;
    patchTask({ gid, status });
  }

  render() {
    const { status } = this.props;
    return (
      <div className={"task-status-ctn task-status-" + status + " hide-small"}>
        <DropdownButton
          id="task-status-dropdown"
          title={this.getCurrentStatus()}
          noCaret>
          {this.getDropDownItems()}
        </DropdownButton>
        <div className="hide-xsmall">
          {STATUS_IMAGES[status] && <img src={`/assets/img/${status}.gif`} alt={`Status: ${status}`} />}
        </div>
        <div className="edit-icon-ctn">
          <TiPencil id="task-edit-icon" size={18} />
        </div>
      </div>
    )
  }
}

export default TaskStatus;
