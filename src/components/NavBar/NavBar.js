import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavItem, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import FaBell from 'react-icons/lib/fa/bell';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import NotificationsModal from './NotificationsModal/NotificationsModal';
import UserSettingsPopover from './UserSettingsPopover';
import JumpToPursuance from './JumpToPursuance/JumpToPursuance';
import './NavBar.css';

class NavBar extends Component {

  getTooltip = () => (
    <Tooltip id="tooltip-bell">
      <strong>Notifications</strong>
    </Tooltip>
  );

  render() {
    const { user } = this.props;
    const { authenticated, username, contributionPoints } = user;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Pursuance</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav navbar-nav">
            <li role="presentation">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <Nav pullRight>
            {
              !authenticated &&
              (
                <NavItem data-toggle="modal" data-target="#sign-up-modal">
                  Sign Up
                </NavItem>
              )
            }
            {!authenticated && <SignUp />}
            {
              !authenticated &&
              (
                <NavItem data-toggle="modal" data-target="#log-in-modal">
                  Log In
                </NavItem>
              )
            }
            {!authenticated && <LogIn />}
            {
              authenticated &&
              (
                <OverlayTrigger
                  placement="bottom"
                  overlay={this.getTooltip()}>
                  <NavItem data-toggle="modal"
                    data-target="#notifications-modal">
                    <FaBell size={24} />
                  </NavItem>
                </OverlayTrigger>
              )
            }
            {
              authenticated &&
                <NotificationsModal
                  onIncreaseContributionAmount={this.props.onIncreaseContributionAmount}
                  onRemoveNotification={this.props.onRemoveNotification} />
            }
            {
              authenticated &&
              (
                <NavItem>
                  <UserSettingsPopover username={username} contributionPoints={contributionPoints} />
                </NavItem>
              )
            }
          </Nav>
          {authenticated &&
            <JumpToPursuance history={this.props.history}/>
          }
        </Navbar.Collapse>
      </Navbar> 
    );
  }
}

export default withRouter(connect(
  ({ user }) => ({ user }))(NavBar));
