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
    let id = parseInt(location.pathname.split('/')[2], 10);
    let rawPursuance = pursuances[id];
    if (rawPursuance !== undefined) {
      return rawPursuance.name;
    } else {
      return "Jump to a pursuance";
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
      <nav className="nav-container">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Pursuance</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Link to="/dashboard">Dashboard</Link>
        <div className="nav-center">
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
        </div>
        <div className="nav-pull-right">
        {!authenticated &&
          (<span>
            <NavItem data-toggle="modal" data-target="#sign-up-modal">
              Sign Up
            </NavItem>
            <SignUp />
            <NavItem data-toggle="modal" data-target="#log-in-modal">
              Log In
            </NavItem>
            <LogIn />
          </span>
          )
        }
        {authenticated &&
          (<span>
            <OverlayTrigger
              placement="bottom"
              overlay={this.getTooltip()}>
              <NavItem data-toggle="modal"
                data-target="#notifications-modal">
                <FaBell size={24} />
              </NavItem>
            </OverlayTrigger>
            <NotificationsModal
                onIncreaseContributionAmount={this.props.onIncreaseContributionAmount}
                onRemoveNotification={this.props.onRemoveNotification} />
            <UserSettingsPopover username={username} contributionPoints={contributionPoints} />
          </span>
          )
        }
        </div>
      </nav>
    );
  }
}

export default withRouter(connect(
  ({ user, pursuances }) => ({ user, pursuances }), {
    getPursuances
  })(NavBar));
