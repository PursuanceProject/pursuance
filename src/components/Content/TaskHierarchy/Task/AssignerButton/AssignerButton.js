import React from 'react';
import './AssignerButton.css';

const AssignerButton = ({ showAssigneeInput, placeholder }) => {
  return (
    <button>
      { placeholder || 'Assign'}
    </button>
  )
}

export default AssignerButton;
