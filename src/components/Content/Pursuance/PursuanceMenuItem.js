import React from 'react';
import { NavLink } from 'react-router-dom';
import './PursuanceMenuItem.css';

const PursuanceMenuItem = ({ pursuanceId, label, action, icon, location, className = '' }) => {
  const rootPath = `/pursuance/${pursuanceId}`;
  return (
    <NavLink
      className={"menu-item " + className}
      to={`${rootPath}/${action}`}
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

export default PursuanceMenuItem;
