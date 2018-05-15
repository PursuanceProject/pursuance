import React from 'react';
import './TaskIcons.css';
import {connect} from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import MdArchive from 'react-icons/lib/md/archive';
import FaCommentsO from 'react-icons/lib/fa/comments-o';
import FaVideoCamera from 'react-icons/lib/fa/video-camera';
import { patchTask } from '../../../../../actions';
import HypothesisLogo from '../../../../../static/hypothesis_logo/HypothesisLogo.png';

const jitsiRoom = 'https://meet.jit.si/PonchoSpiderPageantFoxAlsoLaptopTractorWoundDebrisCaucasianGrapeDishclothFaucetBuddhistRefineryRibbonIridescentWishboneDesktopMugshotLeukemiaOfficeApricotEuthanizeUngloved';

const TaskIcons = ({ gid, patchTask }) => {

  const archiveTask = () => {
    return patchTask({gid, is_archived: true});
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
        <FaCommentsO size={36} className="icon"/>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={getTooltip('video-chat')}>
        <a href={jitsiRoom + gid} target="_blank" rel="nofollow noreferrer noopener">
          <FaVideoCamera size={36} className="icon"/>
        </a>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={getTooltip('hypothesis')}>
        <img src={HypothesisLogo} alt="Hypothes.is" className="hyp-logo"/>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={getTooltip()}>
        <MdArchive size={36} className="icon" onClick={archiveTask}/>
      </OverlayTrigger>
    </div>
  )
}

export default connect(null, {patchTask})(TaskIcons);
