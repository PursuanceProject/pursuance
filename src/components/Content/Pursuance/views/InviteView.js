import React from 'react';
import Invite from '../../Invite/Invite';

const InviteView = ({ match: { params: { pursuanceId } } }) => {
  return (
    <Invite pursuanceId={pursuanceId} />
  );
};

export default InviteView;
