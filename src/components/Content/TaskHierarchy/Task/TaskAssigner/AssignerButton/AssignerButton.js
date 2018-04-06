import React from 'react';
import './AssignerButton.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const AssignerButton = ({ showAssigneeInput, placeholder }) => {

  const getTooltip = () => {
      return <Tooltip>{placeholder}</Tooltip>
  }

  if (placeholder.length > 20) {
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={getTooltip()}
        >
          <button
            onClick={showAssigneeInput}
            className={placeholder ? 'assignee-button' : 'edit-assignee-button'}
            >
              { placeholder }
            </button>
          </OverlayTrigger>
        )
  }else {
    return (
      <button
        onClick={showAssigneeInput}
        className={placeholder ? 'assignee-button' : 'edit-assignee-button'}
        >
          { placeholder || 'Assign'}
      </button>
    )
  }

}

export default AssignerButton;
