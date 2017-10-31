import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import FaBell from 'react-icons/lib/fa/bell';
import FaCircle from 'react-icons/lib/fa/circle';
import NotificationList from '../../Content/Notifications/NotificationList';
import styles from './NotificationsPopover.css';

const NotificationsPopover = ({ notifications }) => (
  <OverlayTrigger 
    trigger="focus" 
    placement="bottom" 
    overlay={(
      <div className="NotificationListContainer">
        <NotificationList notifications={ notifications } />
      </div>
    )}>
    <Button bsStyle="link" bsClass="NotificationsButton">
    <div className="NotificationsButtonContainer">
      {notifications.length > 0 && <FaCircle className="NewNotificationsIndicator" size={14} />}
      <FaBell size={26} />
    </div>
    </Button>
  </OverlayTrigger>
);

const mapStateToProps = (state) => {
  return state.notifications;
}

export default connect(mapStateToProps)(NotificationsPopover);