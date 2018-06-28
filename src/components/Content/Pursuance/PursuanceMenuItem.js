import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './PursuanceMenuItem.css';

const PursuanceMenuItem = ({ currentPursuanceId, label, action, icon, location, className = '', tasks }) => {
  const rootPath = `/pursuance/${currentPursuanceId}`;
  const to = `${rootPath}/${action}`;
  const toDiscussRootTask = (tasks.rootTaskGids.length > 0 || '' ) &&
    `/pursuance/${currentPursuanceId}/discuss/task/${tasks.rootTaskGids[0]}`;
  return (
    <NavLink
      className={"menu-item " + className}
      to={action === 'discuss' ? toDiscussRootTask : to}
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

export default withRouter(connect(({ currentPursuanceId, tasks }) => ({ currentPursuanceId, tasks }))(PursuanceMenuItem));
