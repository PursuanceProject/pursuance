import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'react-bootstrap';
import PursuanceMenuItem from './PursuanceMenuItem';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';
import CommentsO from 'react-icons/lib/fa/comments-o';
import FolderOpen from 'react-icons/lib/fa/folder-open';
import Group from 'react-icons/lib/fa/group';
import Rocket from 'react-icons/lib/fa/rocket';
import PlusCircle from 'react-icons/lib/fa/plus-circle';
import './PursuanceMenu.css';

const PursuanceMenu = ({ currentPursuanceId }) => {
  return (
    <ButtonGroup vertical id="pursuance-btn-group">
      <Button id="pursuance-top-btn">
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          label='New'
          action='add'
          icon={<PlusCircle size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          label='Tasks'
          action='tasks'
          defaultItem
          icon={<FaCheckSquareO size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          label='Discuss'
          action='discuss'
          icon={<CommentsO size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          label='Files & Docs'
          action='docs'
          icon={<FolderOpen size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          label='Participants'
          action='participants'
          icon={<Group size={28} />}
        />
      </Button>
      <Button id="pursuance-bottom-btn">
        <PursuanceMenuItem
          pursuanceId={currentPursuanceId}
          label='Progress'
          action='progress'
          icon={<Rocket size={28} />}
        />
      </Button>
    </ButtonGroup>
  );
};

export default connect(({ currentPursuanceId }) => ({ currentPursuanceId }))(PursuanceMenu);
