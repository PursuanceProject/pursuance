import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import NotificationsPopover from './NotificationsPopover';
import UserSettingsPopover from './UserSettingsPopover';
import './NavBar.css';

class NavBar extends Component {

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
            {
              !authenticated && (
                <NavItem data-toggle="modal" data-target="#sign-up-modal">
                  Sign Up
                </NavItem>)
            }
            {
              !authenticated && <SignUp />
            }
            {
              !authenticated && (
                <NavItem data-toggle="modal" data-target="#log-in-modal">
                  Log In
                </NavItem>)
            }
            {
              !authenticated && <LogIn />
            }
            {
              authenticated && (
                <NavItem>
                  <UserSettingsPopover username={username} contributionPoints={contributionPoints} />
                </NavItem>
              )
            }
            {
              authenticated && (
                <NavItem>
                  <NotificationsPopover
                    onIncreaseContributionAmount={this.props.onIncreaseContributionAmount}
                    onRemoveNotification={this.props.onRemoveNotification}
                  />
                </NavItem>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
