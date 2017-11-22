import React from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import FaBell from 'react-icons/lib/fa/bell';
import FaCircle from 'react-icons/lib/fa/circle';
import NotificationList from '../../Content/Notifications/NotificationList';
import './NotificationsPopover.css';

const NotificationsPopover = ({ notifications, onIncreaseContributionAmount, onRemoveNotification }) => (
  <OverlayTrigger
    trigger="focus"
    placement="bottom"
    overlay={(
      <Popover className="NotificationListContainer" id={'popover'}>
        <NotificationList
          notifications={ notifications }
          onIncreaseContributionAmount={onIncreaseContributionAmount}
          onRemoveNotification={onRemoveNotification}
          />
      </Popover>
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
