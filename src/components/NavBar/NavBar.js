import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
import FaBell from 'react-icons/lib/fa/bell';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import NotificationsModal from './NotificationsModal/NotificationsModal';
import UserSettingsPopover from './UserSettingsPopover';
import jumpToPursuanceOptions from './JumpToPursuance/JumpToPursuance';
import { getPursuances } from '../../actions';
import './NavBar.css';

class NavBar extends Component {

  componentWillMount() {
    // TODO: Once we add auth, only grab pursuances that the logged-in
    // user is a mumber of
    this.props.getPursuances();
  }

  getTooltip = () => (
    <Tooltip id="tooltip-bell">
      <strong>Notifications</strong>
    </Tooltip>
  );

  showCurrentPursuance = (pursuances) => {
    const { location } = this.props;
    let id = parseInt(location.pathname.slice(-1), 10);
    let rawPursuance = pursuances[id];
    if (rawPursuance !== undefined) {
      return rawPursuance.name;
    } else {
      return "Jump to pursuance";
    }
  }

  handleJumpToPursuance = (e) => {
    const { history } = this.props;
    history.push(`/pursuance/${e}`);
    history.go();
  }

  render() {
    const { user, pursuances } = this.props;
    const { authenticated, username, contributionPoints } = user;
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
            {authenticated && (
              <NavDropdown
                id="jump-to-pursuance"
                title={this.showCurrentPursuance(pursuances)}
                onSelect={this.handleJumpToPursuance}
                >
                  {jumpToPursuanceOptions(pursuances)}
              </NavDropdown>
              )
            }
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

export default withRouter(connect(
  ({ user, pursuances }) => ({ user, pursuances }), {
    getPursuances
  })(NavBar));
