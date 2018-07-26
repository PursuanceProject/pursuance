import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import MdArchive from 'react-icons/lib/md/archive';
import FaCommentsO from 'react-icons/lib/fa/comments-o';
import FaVideoCamera from 'react-icons/lib/fa/video-camera';
import {
  archiveTask,
  toggleHypothesisModal,
  fetchHypothesisGroup
} from '../../../../../actions';
import './TaskIcons.css';

const jitsiRoom = 'https://meet.jit.si/PonchoSpiderPageantFoxAlsoLaptopTractorWoundDebrisCaucasianGrapeDishclothFaucetBuddhistRefineryRibbonIridescentWishboneDesktopMugshotLeukemiaOfficeApricotEuthanizeUngloved';

const TaskIcons = ({ gid, creatingHypothesisGroup, subtaskGids = [], archiveTask, toggleHypothesisModal, fetchHypothesisGroup, hypothesis, history, currentPursuanceId }) => {

  const archiveThisTask = () => {
    archiveTask({gid});
  }

  const isTaskArchivable = () => {
    return subtaskGids.length === 0;
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

  const showHypothesisModal = () => {
    toggleHypothesisModal({taskGid: gid});
  }

  const hideHypothesisModal = () => {
    toggleHypothesisModal({taskGid: ''});
  }

  const setName = (e) => {
    this.hypName = e.target.value;
  }

  const setDescription = (e) => {
    this.hypDescription = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!this.hypName) {
      return;
    }

    fetchHypothesisGroup({
      taskGid: gid,
      name: this.hypName,
      description: this.hypDescription,
    });
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

      {creatingHypothesisGroup !== 'done' &&
        <div>
          <OverlayTrigger placement="bottom" overlay={getTooltip('hypothesis')}>
            <img
              src="/assets/img/HypothesisLogo.png"
              alt="Hypothes.is"
              className="hyp-logo"
              onClick={showHypothesisModal}
            />
          </OverlayTrigger>

          <Modal show={!!hypothesis.taskGid} onHide={hideHypothesisModal} className={creatingHypothesisGroup === 'in progress' ? 'busy' : ''}>
            <Modal.Header closeButton>
              Create Hypothesis Group
            </Modal.Header>

            <Modal.Body>
              <form className="hypgroup-form form-horizontal" name={'modal-' + gid}>
                <div id="input-hypgroup-name-ctn" className="">
                  <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="input-hypgroup-name">Name*</label>
                    <div className="col-sm-10">
                      <input
                        id="input-hypgroup-name"
                        type="text"
                        className="form-control"
                        placeholder="P-5-InvestigateCops"
                        name={'name'}
                        defaultValue={''}
                        autoFocus
                        maxLength={25}
                        onChange={setName}
                      />
                    </div>
                  </div>
                  <div id="input-hypgroup-description-ctn" className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="input-hypgroup-description">Description</label>
                    <div className="col-sm-10">
                      <input
                        id="input-hypgroup-description"
                        type="text"
                        className="form-control"
                        placeholder=""
                        name={'name'}
                        defaultValue={''}
                        maxLength={250}
                        onChange={setDescription}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <button className="btn btn-primary" onClick={handleSubmit}>
                        Create Group
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      }

      {isTaskArchivable() && (
        <OverlayTrigger placement="bottom" overlay={getTooltip()}>
          <MdArchive size={34} className="icon" onClick={archiveThisTask}/>
        </OverlayTrigger>
      )}
    </div>
  )
}

export default withRouter(connect(({currentPursuanceId, hypothesis, userLoginSuccess}) => ({currentPursuanceId, hypothesis, userLoginSuccess}), { archiveTask, toggleHypothesisModal, fetchHypothesisGroup })(TaskIcons));
