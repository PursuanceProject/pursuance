import React from 'react';
import { connect } from 'react-redux';
import './AssignerButton.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const AssignerButton = ({ showAssigneeInput, placeholder, user }) => {

  const getTooltip = () => {
    return <Tooltip id="assigner-button">{placeholder}</Tooltip>
  }

  const getClassName = () => {
    const clsName = placeholder ? 'assignee-button' : 'edit-assignee-button';
    const otherClsName = user.username && (placeholder || '').slice(1) === user.username
      ? ' assigned-to-me'
      : '';
    return clsName + otherClsName;
  }

  if (placeholder && placeholder.length > 25) {
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={getTooltip()}
        >
          <button
            onClick={showAssigneeInput}
            className={getClassName()}
            >
              { placeholder }
          </button>
      </OverlayTrigger>
    )
  } else {
    return (
      <button
        onClick={showAssigneeInput}
        className={getClassName()}
        >
          { placeholder || 'Assign'}
      </button>
    )
  }
}

export default connect(({user}) => ({user}))(AssignerButton);
