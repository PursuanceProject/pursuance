import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import PursuanceMenuItem from './PursuanceMenuItem';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';
import FaCalendar from 'react-icons/lib/fa/calendar';
import CommentsO from 'react-icons/lib/fa/comments-o';
// import FolderOpen from 'react-icons/lib/fa/folder-open';
// import Group from 'react-icons/lib/fa/group';
// import Rocket from 'react-icons/lib/fa/rocket';
// import PlusCircle from 'react-icons/lib/fa/plus-circle';
import './PursuanceMenu.css';

const PursuanceMenu = () => {
  return (
    <ButtonGroup vertical className="pursuance-btn-group hide-xsmall">
      <div>
        {/*
        <PursuanceMenuItem
          className="pursuance-top-btn"
          label='New'
          action='add'
          icon={<PlusCircle size={28} />}
        />
        */}
        <PursuanceMenuItem
          className="pursuance-top-btn"
          label='Discuss'
          action='discuss'
          icon={<CommentsO size={28} />}
        />
        <PursuanceMenuItem
          label='Tasks'
          action='tasks'
          icon={<FaCheckSquareO size={28} />}
        />
        <PursuanceMenuItem
          className="pursuance-bottom-btn"
          label='Calendar'
          action='calendar'
          icon={<FaCalendar size={28} />}
        />
        {/*
        <PursuanceMenuItem
          label='Files & Docs'
          action='docs'
          icon={<FolderOpen size={28} />}
        />
        <PursuanceMenuItem
          label='Participants'
          action='participants'
          icon={<Group size={28} />}
        />
        <PursuanceMenuItem
          className="pursuance-bottom-btn"
          label='Progress'
          action='progress'
          icon={<Rocket size={28} />}
        />
        */}
      </div>
    </ButtonGroup>
  );
};

export default withRouter(connect(null)(PursuanceMenu));
