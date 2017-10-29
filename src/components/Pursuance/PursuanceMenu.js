import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import PursuanceMenuItem from './PursuanceMenuItem';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';
import CommentsO from 'react-icons/lib/fa/comments-o';
import FolderOpen from 'react-icons/lib/fa/folder-open';
import Group from 'react-icons/lib/fa/group';
import Rocket from 'react-icons/lib/fa/rocket';
import PlusCircle from 'react-icons/lib/fa/plus-circle';
import { connect } from 'react-redux';

const PursuanceMenu = ({ pursuanceId }) => {
  return (
    <ButtonGroup vertical>
      <Button>
        <PursuanceMenuItem
          pursuanceId={pursuanceId}
          label='New'
          action='add'
          icon={<PlusCircle size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={pursuanceId}
          label='Tasks'
          action='tasks'
          defaultItem
          icon={<FaCheckSquareO size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={pursuanceId}
          label='Discuss'
          action='discussion'
          icon={<CommentsO size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={pursuanceId}
          label='Files & Docs'
          action='docs'
          icon={<FolderOpen size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={pursuanceId}
          label='Participants'
          action='participants'
          icon={<Group size={28} />}
        />
      </Button>
      <Button>
        <PursuanceMenuItem
          pursuanceId={pursuanceId}
          label='Progress'
          action='progress'
          icon={<Rocket size={28} />}
        />
      </Button>
    </ButtonGroup>
  );
};

export default connect(({ currentPursuanceId }) => ({ currentPursuanceId }))(PursuanceMenu);
