import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import FaBomb from 'react-icons/lib/fa/bomb';

import './TaskOptions.css';

const VALID_OPTIONS = [
  'Nuke Task'
];

const OPTION_ICONS = {
  'Nuke Task': true
}

const TaskOptions = ({ taskData, deleteTask }) => {
  const isTaskDeletable = () => {
    const { subtask_gids } = taskData;
    return subtask_gids.length === 0;
  }

  const getDropDownItems = () => {
    return VALID_OPTIONS.map((statusName, i) => {
      return (
        <MenuItem eventKey={i} key={statusName} className="task-options-menu-item">
          {isTaskDeletable() && <div onClick={del}>{OPTION_ICONS[statusName] && <FaBomb size={15} />} {statusName}</div>}
        </MenuItem>
      );
    });
  }

  const del = () => {
    deleteTask(taskData);
  }

  const renderEllipse = () => {
    return (
      <div>
        <FaEllipsisV size={20} />
      </div>
    );
  }

  return (
    <DropdownButton
      id="task-status-dropdown"
      bsSize="small"
      title={renderEllipse()}
      pullRight
      noCaret>
      {getDropDownItems()}
    </DropdownButton>
  )
}

export default TaskOptions;
