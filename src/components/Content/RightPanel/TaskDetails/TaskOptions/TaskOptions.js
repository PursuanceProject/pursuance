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

  const isDisplayable = (optionName) => {
    switch (optionName) {
      case 'Nuke Task':
        return isTaskDeletable();
      default:
        return true;
    }
  }

  const sendAction = (action) => {
    switch (action) {
      case 'Nuke Task':
        deleteTask(taskData);
        break;
      default:
        break;
    }
  }

  const renderAction = (optionName) => {
    switch(optionName) {
      case 'Nuke Task':
        return <FaBomb size={15} className="action-icon" />;
      default:
        return null;
    }
  }

  const renderDropDownItems = () => {
    return VALID_OPTIONS.map(optionName => {
      if (isDisplayable(optionName)) {
        return (
          <MenuItem key={optionName} onClick={() => sendAction(optionName)} className="task-options-menu-item">
            <div>{renderAction(optionName)}{optionName}</div>
          </MenuItem>
        );
      }
    })
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
        {renderDropDownItems()}
      </DropdownButton>
    </div>
  )
}

export default TaskOptions;
