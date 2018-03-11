import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
import FaBell from 'react-icons/lib/fa/bell';
import { connect } from 'react-redux';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import NotificationsModal from './NotificationsModal/NotificationsModal';
import UserSettingsPopover from './UserSettingsPopover';
import jumpToPursuanceOptions from './JumpToPursuance/JumpToPursuance';
import { getPursuances } from '../../actions';
import './NavBar.css';

class NavBar extends Component {

  getTooltip = () => (
    <Tooltip id="tooltip-bell">
      <strong>Notifications</strong>
    </Tooltip>
  );

  showCurrentPursuance = () => {
    if (!this.props.currentPursuanceId) {
      return "Jump to a Pursuance";
    } else {
      return this.props.currentPursuanceId;
    }
  }

  handleJumpToPursuance = (e) => {
    window.location.replace(`/pursuance/${e}`);
  }

  render() {
    const { authenticated, username, contributionPoints } = this.props;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Pursuance</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav navbar-nav">
            <li role="presentation">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <Nav pullRight>
            {/* empty state if not on a pursuance page */}
            {authenticated && (
              <NavDropdown
              id="jump-to-pursuance"
              title={this.showCurrentPursuance()}
              onSelect={this.handleJumpToPursuance}
              >
                  {jumpToPursuanceOptions(this.props.pursuances)}
                </NavDropdown>

              )}
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
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(({ pursuances, currentPursuanceId }) =>
  ({ pursuances, currentPursuanceId }), {
    getPursuances
})(NavBar);
