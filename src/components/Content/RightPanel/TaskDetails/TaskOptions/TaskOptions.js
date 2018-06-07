import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import FaBomb from 'react-icons/lib/fa/bomb';

import './TaskOptions.css';

const VALID_OPTIONS = [
  'Nuke Task'
];

const TaskOptions = ({ taskData, deleteTask }) => {
  const isTaskDeletable = () => {
    const { subtask_gids } = taskData;
    return subtask_gids.length === 0;
  }

  const getDropDownItems = () => {
    const actionName = VALID_OPTIONS[0];
    return (
      <MenuItem key={actionName} onClick={del} className="task-options-menu-item">
        <div><FaBomb size={15} /> {actionName}</div>
      </MenuItem>
    );
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
    <div className="task-options-ctn hide-small">
      <DropdownButton
        id="task-options-dropdown"
        bsSize="small"
        title={renderEllipse()}
        pullRight
        noCaret>
        {isTaskDeletable() && getDropDownItems()}
      </DropdownButton>
    </div>
  )
}

export default TaskOptions;
