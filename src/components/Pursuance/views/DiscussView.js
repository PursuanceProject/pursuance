import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postgrest from '../../../api/postgrest';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import './DiscussView.css';

const ReactMarkdown = require('react-markdown');

const leapChatUrl = "http://localhost:8080/#GiddinessPuttRegisterKioskLucidityJockstrapTastebudFactoryPegboardOpticalEstrogenGoatskinHatchlingDittoPseudoNegotiatorLunchboxLightbulbUploadSyllableTulipQuiltJurorRuptureAorta";

class DiscussView extends Component {

  render() {
    const { match: { params: { pursuanceId } }, pursuances, tasks } = this.props;
    // TODO: Un-hardcode after demo
    const taskGid = '1_195';
    console.log('tasks.taskMap', tasks.taskMap);
    const task = tasks.taskMap[taskGid];
    const assignedPursuanceId = task.assigned_to_pursuance_id;
    return (
      <div id="discuss-ctn">
        <iframe id="leapchat-frame" title="Leapchat" src={leapChatUrl} />
        <div className="task-details-ctn">
          <div className="task-assignment-ctn">
            <div className="assigned-to-ctn">
              <span>
                {
                  (assignedPursuanceId && pursuances[assignedPursuanceId].suggestionName)
                  ||
                  (task.assigned_to && '@' + task.assigned_to)
                }
              </span>
            </div>
            <div className="due-date-ctn">
              {task.due_date && postgrest.formatDate(task.due_date)}
            </div>
            <div className="task-discuss-icons-ctn">
              <div className="icon-ctn">
                <FaEllipsisH />
              </div>
            </div>
          </div>
          <div className="pursuance-task-title-ctn">
            <div className="pursuance-title-ctn">
              <span className="pursuance-title">{pursuances[task.pursuance_id] && pursuances[task.pursuance_id].title}</span>
              <span className="task-title">{task.title}</span>
            </div>
          </div>
          <div className="task-deliverables-ctn">
            <span>
              <ReactMarkdown
                source={task.deliverables}
                renderers={{Link: props => {
                  if (props.href.startsWith('/')) {
                    return <a href={props.href}>{props.children}</a>;
                  }
                  // If link to external site, open in new tab
                  return <a href={props.href} target="_blank">{props.children}</a>;
                }}}
              />
            </span>
          </div>
        </div>
      </div>
    );
  };
}

export default connect(({pursuances, tasks}) => ({pursuances, tasks}))(DiscussView);
