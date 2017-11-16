import React from 'react';

import ParticipantList from '../../ParticipantList/ParticipantList';

const ParticipantsView = ({ match: { params: { pursuanceId } } }) => {
  return (
    <ParticipantList pursuanceId={pursuanceId} />
  )
};

export default ParticipantsView;
