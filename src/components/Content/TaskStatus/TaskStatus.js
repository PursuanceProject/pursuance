import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import TiPencil from 'react-icons/lib/ti/pencil';
import './TaskStatus.css';


class TaskStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStatus: ''
    };

    this.statusTypes = [
      'New',
      'Started',
      'WorkingOn',
      'HelpWanted',
      'ReadyForReview',
      'Reviewing',
      'Done'
    ];
  }

  componentDidMount() {
    // TODO: Fetch current task status

    // this.setState({
    //   ...this.state,
    //   currentStatus: //insert current task status
    // });
  }

  getCurrentStatus = () => {
    return this.state.currentStatus.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  getDropDownItems = () => {
    // eslint-disable-next-line
    return this.statusTypes.map((statusName, i) => {
      if (statusName !== this.state.currentStatus) {
        return (
          <MenuItem eventKey={i + 1} key={statusName}
            onClick={() => this.selectStatus(statusName)}>
            {statusName.replace(/([a-z])([A-Z])/g, "$1 $2")}
          </MenuItem>
        );
      }
    });
  }

  selectStatus = (statusName) => {
    // TODO: PATCH request

    this.setState({
      ...this.state,
      currentStatus: statusName
    });
  }

  render() {
    const { statusName } = this.state;
    return (
      <div className={"task-status-ctn task-status-" + statusName}>
        <DropdownButton
          id="task-status-dropdown"
          title={this.getCurrentStatus()}
          noCaret>
          {this.getDropDownItems()}
        </DropdownButton>
        <div className="edit-icon-ctn">
          <TiPencil id="task-edit-icon" size={18} />
        </div>
      </div>
    )
  }
}

export default TaskStatus;
