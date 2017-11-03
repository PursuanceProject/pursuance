import React from 'react';
import { Popover, OverlayTrigger, Button, Badge } from 'react-bootstrap';
import ContributionPointsCounter from './ContributionPointsCounter';
import FaStar from 'react-icons/lib/fa/star';
import './UserSettingsPopover.css';

const UserSettingsPopover = ({ username, contributionPoints }) => (
  <OverlayTrigger 
    trigger="focus" 
    placement="bottom" 
    overlay={(
      <Popover id="popover-positioned-bottom" title={username}>
        <Button bsSize="large">Sign out</Button>
      </Popover>
    )}>
    <Button bsStyle="link" bsClass="UserSettingsButton">
      <span>@{username}</span>
      <ContributionPointsCounter contributionPoints={contributionPoints} />
    </Button>
  </OverlayTrigger>
);

export default UserSettingsPopover;
