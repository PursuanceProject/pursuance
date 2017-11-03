import React, { PureComponent } from 'react';
import NotificationIcon from './NotificationIcon';
import NotificationAction from './NotificationAction';
import './Notification.css';
const ReactMarkdown = require('react-markdown');

class Notification extends PureComponent {

  handleActionClicked = (contributionAmount) => {
    const { id, actionTarget, type } = this.props;
    this.props.onActionClick({ id, actionTarget, type, contributionAmount });
  }

  render() {
    const { type, content } = this.props;
    return (
      <div className="Notification">
        <div className="NotificationIconContainer">
          <NotificationIcon type={type} />
        </div>
        <div className="NotificationContentContainer">
          <ReactMarkdown source={content} />
        </div>
        <div className="NotificationActionContainer">
          <NotificationAction type={type} onClick={this.handleActionClicked} />
        </div>
      </div>
    );
  }
}

export default Notification;
