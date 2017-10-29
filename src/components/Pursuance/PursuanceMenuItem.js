import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuItem.css';

const PursuanceMenuItem = ({ pursuanceId, label, action, icon, defaultItem }) => {
  const rootPath = `/pursuance/${pursuanceId}`;
  return (
  <NavLink
    className='MenuItem'
    to={`${rootPath}/${action}`}
    isActive={
      (match, location) => 
        (match || (defaultItem && location.pathname === rootPath))
    }
    activeClassName='Active'>
    {icon}
    <span>{label}</span>

  </NavLink>
)};

export default PursuanceMenuItem;