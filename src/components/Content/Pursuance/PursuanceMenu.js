import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ButtonGroup, Button } from 'react-bootstrap';
import PursuanceMenuItem from './PursuanceMenuItem';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';
import FaCalendar from 'react-icons/lib/fa/calendar';
import CommentsO from 'react-icons/lib/fa/comments-o';
import FolderOpen from 'react-icons/lib/fa/folder-open';
import Group from 'react-icons/lib/fa/group';
import Rocket from 'react-icons/lib/fa/rocket';
import PlusCircle from 'react-icons/lib/fa/plus-circle';
import './PursuanceMenu.css';

const PursuanceMenu = ({ currentPursuanceId, location }) => {
  return (
    <ButtonGroup vertical id="pursuance-btn-group">
      <Button id="pursuance-top-btn">
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          location={location}
          label='New'
          action='add'
          icon={<PlusCircle size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          location={location}
          label='Tasks'
          action='tasks'
          icon={<FaCheckSquareO size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          location={location}
          label='Calendar'
          action='calendar'
          icon={<FaCalendar size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          location={location}
          label='Discuss'
          action='discuss'
          icon={<CommentsO size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          location={location}
          label='Files & Docs'
          action='docs'
          icon={<FolderOpen size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          location={location}
          label='Participants'
          action='participants'
          icon={<Group size={28} />}
        />
      </Button>
      <Button id="pursuance-bottom-btn">
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          location={location}
          label='Progress'
          action='progress'
          icon={<Rocket size={28} />}
        />
      </Button>
    </ButtonGroup>
  );
};

export default withRouter(connect(({ currentPursuanceId }) => ({ currentPursuanceId }))(PursuanceMenu));
