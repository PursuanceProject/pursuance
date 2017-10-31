import React, { PureComponent } from 'react';
import FaCheck from 'react-icons/lib/fa/check';
import FaCommentsO from 'react-icons/lib/fa/comments-o';
import FaHandPaperO from 'react-icons/lib/fa/hand-paper-o';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';


import { Button } from 'react-bootstrap';
import './NotificationAction.css';

const iconSize = 34;

class NotificationAction extends PureComponent {

  handleActionButtonClicked = () => {
    this.props.onClick();
  }

  renderNotificationAction = (icon, title) => (
    <div className="NotificationAction">
      <Button 
        onClick={this.handleActionButtonClicked} 
        bsStyle="link" 
        bsClass="NotificationActionButton">
        {icon}
      </Button>
      <span>{title}</span>
    </div>
  )

  render () {
    const { type } = this.props;
    switch (type) {
      case 'MICRO_TASK':
        return this.renderNotificationAction(<FaCheck size={iconSize} />, 'I did this');
      case 'MENTION':
        return this.renderNotificationAction(<FaCommentsO size={iconSize} />, 'Go to chat');
      case 'HELP_WANTED':
        return this.renderNotificationAction(<FaHandPaperO size={iconSize} />, 'Volunteer');
      case 'PROGRESS':
        return this.renderNotificationAction(<FaCheckSquareO size={iconSize} />, 'Go to task');
      default:
        return null
    }
  }
}

export default NotificationAction;