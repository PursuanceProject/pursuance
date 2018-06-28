import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './PursuanceMenuItem.css';

const PursuanceMenuItem = ({ currentPursuanceId, label, action, icon, location, className = '' }) => {
  const rootPath = `/pursuance/${currentPursuanceId}`;
  const to = `${rootPath}/${action}`;
  return (
    <NavLink
      className={"menu-item " + className}
      to={to}
      isActive={
        () =>
          ((action === 'tasks' && (location.pathname === rootPath || location.pathname === rootPath + '/'))
          ||
          location.pathname.indexOf(`/${action}`) !== -1)
      }
      activeClassName="Active">
      {icon}
      <span className="menu-btn-label"><b>{label}</b></span>
    </NavLink>
  )
};

export default withRouter(connect(({ currentPursuanceId }) => ({ currentPursuanceId }))(PursuanceMenuItem));
