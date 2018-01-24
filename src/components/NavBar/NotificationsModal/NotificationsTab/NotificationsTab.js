import React, { Component } from 'react';
import './NotificationsTab.css';

class NotificationsTab extends Component {

  toggleFilterCtn = () => {

  }

  markAsRead = () => {
    // TODO: Remove highlight effects on all Notification Tabs
  }

  seeAll = () => {
    // TODO: Route to Notifications Page
  }

  render() {
    return (
      <div id="notifications-modal" className="modal" role="dialog">
        <div className="triangle-pointer" />
        <div className="modal-dialog notifications-dialog" role="document">
          <div className="modal-content notifications-content">
            <div className="modal-header notifications-header">
              <div id="notifications-title">
                <span>
                  Notifications
                </span>
                <div id="notifications-filter-btn"
                  onClick={this.toggleFilterCtn}>
                  <FaSliders size={16} />
                </div>
              </div>
              <div id="mark-as-read">
                <span onClick={this.markAsRead}>
                  Mark All as Read
                </span>
              </div>
            </div>
            <div className="modal-body notifications-body">
            </div>
            <div className="modal-footer notifications-footer">
              <div id="see-all-notifications">
                <span onClick={this.seeAll}>
                  See All
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationsTab;
