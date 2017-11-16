import React from 'react';
import { NavLink } from 'react-router-dom';
import './PursuanceMenuItem.css';

const PursuanceMenuItem = ({ pursuanceId, label, action, icon, defaultItem }) => {
  const rootPath = `/pursuance/${pursuanceId}`;
  return (
    <NavLink
      className="menu-item"
      to={`${rootPath}/${action}`}
      isActive={
        (match, location) =>
          (match || (defaultItem && location.pathname === rootPath))
      }
      activeClassName="Active">
      {icon}
      <span className="menu-btn-label"><b>{label}</b></span>
    </NavLink>
)};

export default PursuanceMenuItem;
