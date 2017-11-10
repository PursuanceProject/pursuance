import React, { PureComponent } from 'react';
import { withRouter } from 'react-router'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Notification from './Notification';

class NotificationList extends PureComponent {

  handleActionClicked = ({ id, actionTarget, type, contributionAmount }) => {
    if (contributionAmount && contributionAmount > 0) {
      this.props.onIncreaseContributionAmount(contributionAmount);
    }
    if (actionTarget) {
      this.props.history.push(actionTarget);
    }

    this.props.onRemoveNotification(id)
  }

  render() {
    const { notifications } = this.props;
    return (
        <ListGroup>
        {
          notifications.length > 0 ? notifications.map(({ id, notificationType, content, actionTarget }) => (
            <ListGroupItem key={id}>
              <Notification 
                id={id}
                type={notificationType} 
                content={content} 
                onActionClick={this.handleActionClicked}
                actionTarget={actionTarget} />
              </ListGroupItem>
          )) : <ListGroupItem>You are all caught up, there are no new notifications.</ListGroupItem>
        }
        </ListGroup>
      );
  }
}

export default withRouter(NotificationList);
