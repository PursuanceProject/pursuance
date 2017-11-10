import React from 'react';

const Participant = ({username}) => {
  return (
    <div className="participant-ctn">
      <div className="participant-avatar" />
      <div className="participant-name">{username}</div>
    </div>
  );
};

export default Participant;
