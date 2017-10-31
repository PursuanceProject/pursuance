import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import FaUser from 'react-icons/lib/fa/user';
import NotificationList from '../../Content/Notifications/NotificationList';
import styles from './UserSettingsPopover.css';

const NotificationsPopover = ({ username }) => (
  <OverlayTrigger 
    trigger="focus" 
    placement="bottom" 
    overlay={(
      <Popover id="popover-positioned-bottom" title={username}>
        <Button bsSize="large">Sign out</Button>
      </Popover>
    )}>
    <Button bsStyle="link" bsClass="UserSettingsButton">
      <FaUser size={26} />
    </Button>
  </OverlayTrigger>
);

const mapStateToProps = (state) => {
  return state.notifications;
}

export default connect(mapStateToProps)(NotificationsPopover);