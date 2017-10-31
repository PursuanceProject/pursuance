import React, { PureComponent } from 'react';
import { withRouter } from 'react-router'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Notification from './Notification';

class NotificationList extends PureComponent {

  handleActionClicked = ({ id, actionTarget }) => {
    console.log({ id, actionTarget });
    if(actionTarget) {
      this.props.history.push(actionTarget);
    }
  }

  render () {
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