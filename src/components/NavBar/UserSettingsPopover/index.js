import React from 'react';
import { connect } from 'react-redux';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import ContributionPointsCounter from './ContributionPointsCounter';
import { userLogoutSuccess } from '../../../actions';
import './UserSettingsPopover.css';

const UserSettingsPopover = ({ username, contributionPoints, userLogoutSuccess }) => (
  <OverlayTrigger
    trigger="focus"
    placement="bottom" 
    overlay={(
      <Popover id="popover-positioned-bottom" title={username}>
        <Button bsSize="large" onClick={userLogoutSuccess}>
          Sign out
        </Button>
      </Popover>
    )}>
    <Button bsStyle="link" bsClass="UserSettingsButton">
      <span className="Username">@{username}</span>
      <ContributionPointsCounter contributionPoints={contributionPoints} />
    </Button>
  </OverlayTrigger>
);

export default connect(null, { userLogoutSuccess })(UserSettingsPopover);
