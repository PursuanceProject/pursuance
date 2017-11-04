import React from 'react';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import './DiscussView.css';

const leapChatUrl = "http://localhost:8080/#GiddinessPuttRegisterKioskLucidityJockstrapTastebudFactoryPegboardOpticalEstrogenGoatskinHatchlingDittoPseudoNegotiatorLunchboxLightbulbUploadSyllableTulipQuiltJurorRuptureAorta";

const DiscussView = ({ match: { params: { pursuanceId } } }) => {
  return (
    <div id="discuss-ctn">
      <iframe id="leapchat-frame" title="Leapchat" src={leapChatUrl} />
      <div className="task-description-ctn">
        <div className="task-assignment-ctn">
          <div className="assigned-to-ctn">
            <span>{}</span>
          </div>
          <div className="due-date-ctn">
            <span>{}</span>
          </div>
          <div className="task-discuss-icons-ctn">
            <div className="icon-ctn">
              <FaEllipsisH />
            </div>
          </div>
        </div>
        <div className="pursuance-task-title-ctn">
          <div className="pursuance-title-ctn">
            <span className="pursuance-title">{}</span>
            <span className="task-title">{}</span>
          </div>
        </div>
        <div className="task-deliverables-ctn">
          <span>{}</span>
        </div>
      </div>
    </div>
  );
};

export default DiscussView;
