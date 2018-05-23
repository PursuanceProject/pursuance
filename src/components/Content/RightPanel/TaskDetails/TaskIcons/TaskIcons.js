import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import MdArchive from 'react-icons/lib/md/archive';
import FaCommentsO from 'react-icons/lib/fa/comments-o';
import FaVideoCamera from 'react-icons/lib/fa/video-camera';
import './TaskIcons.css';
import { patchTask } from '../../../../../actions';
import HypothesisLogo from '../../../../../static/hypothesis_logo/HypothesisLogo.png';

const jitsiRoom = 'https://meet.jit.si/PonchoSpiderPageantFoxAlsoLaptopTractorWoundDebrisCaucasianGrapeDishclothFaucetBuddhistRefineryRibbonIridescentWishboneDesktopMugshotLeukemiaOfficeApricotEuthanizeUngloved';

const TaskIcons = ({ gid, patchTask, history, currentPursuanceId }) => {

  const archiveTask = () => {
    return patchTask({gid, is_archived: true});
  }

  const redirectToDiscuss = () => {
    history.push({
      pathname: `/pursuance/${currentPursuanceId}/discuss/task/${gid}`
    });
  }

  const getTooltip = (icon) => {
    if (icon === 'hypothesis') {
      return (
        <Tooltip id="tooltip-hypothesis">
          <strong>
            Create Hypothesis Group
          </strong>
        </Tooltip>
      )
    }
    if (icon === 'video-chat') {
      return (
        <Tooltip id="tooltip-video-chat">
          <strong>
            Video Chat
          </strong>
        </Tooltip>
      )
    }
    if (icon === 'chat') {
      return (
        <Tooltip id="tooltip-text-chat">
          <strong>
            Discuss Task
          </strong>
        </Tooltip>
      )
    }
    else {
        return (
          <Tooltip id="tooltip-archive">
            <strong>
              Archive Task
            </strong>
          </Tooltip>
        )
    }
  }

  return (
    <div className="task-icons">
      <OverlayTrigger placement="bottom" overlay={getTooltip('chat')}>
        <div id={'discuss-task-' + gid} className="icon icon-ctn discuss-task" onClick={redirectToDiscuss}>
          <FaCommentsO size={34} />
        </div>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={getTooltip('video-chat')}>
        <a href={jitsiRoom + gid} target="_blank" rel="nofollow noreferrer noopener">
          <FaVideoCamera size={34} className="icon"/>
        </a>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={getTooltip('hypothesis')}>
        <img src={HypothesisLogo} alt="Hypothes.is" className="hyp-logo"/>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={getTooltip()}>
        <MdArchive size={34} className="icon" onClick={archiveTask}/>
      </OverlayTrigger>
    </div>
  )
}

export default withRouter(connect(({currentPursuanceId}) => ({currentPursuanceId}), { patchTask })(TaskIcons));
