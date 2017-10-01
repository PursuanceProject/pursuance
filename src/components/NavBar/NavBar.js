import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import './NavBar.css';

class NavBar extends Component {

  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Pursuance</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <Link to="/dashboard">Dashboard</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem data-toggle="modal" data-target="#sign-up-modal">
              Sign Up
            </NavItem>
            <SignUp />
            <NavItem data-toggle="modal" data-target="#log-in-modal">
              Log In
            </NavItem>
            <LogIn />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
