import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postgrest from '../../../../api/postgrest';
import ReactMarkdown from 'react-markdown';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import './DiscussView.css';
import { getTasks } from '../../../../actions';

const leapChatUrl = "http://localhost:8080/#GiddinessPuttRegisterKioskLucidityJockstrapTastebudFactoryPegboardOpticalEstrogenGoatskinHatchlingDittoPseudoNegotiatorLunchboxLightbulbUploadSyllableTulipQuiltJurorRuptureAorta";

class DiscussView extends Component {

  componentWillMount(){
    const { match: { params: { pursuanceId, taskGid } }, tasks, getTasks } = this.props;
    if (!tasks.taskMap[taskGid]) {
      getTasks(pursuanceId);
    }
  }

  render() {
    const { pursuances, tasks, match: { params: { taskGid } } } = this.props;
    // TODO: Un-hardcode after demo
    const task = tasks.taskMap[taskGid];
    if(!task){
      return <div className="no-task">Ain't nobody got task fo' that.</div>
    }
    const assignedPursuanceId = task.assigned_to_pursuance_id;
    const subtaskGids = task.subtask_gids;
    return (
      <div className="discuss-ctn">
        <iframe className="leapchat-frame" title="Leapchat" src={leapChatUrl + taskGid} />
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
                <FaEllipsisV size={20} />
              </div>
            </div>
          </div>
          <div className="pursuance-discuss-ctn">
            <div className="pursuance-task-title-ctn">
              <div className="pursuance-title-ctn">
                <span className="pursuance-title">
                  {pursuances[task.pursuance_id] && pursuances[task.pursuance_id].name}
                </span>
              </div>
              <div className="discuss-task-title-ctn">
                <FaCircleO />
                <span className="discuss-task-title">{task.title}</span>
              </div>
            </div>
            <div className="task-deliverables-ctn">
              <span>
                <ReactMarkdown
                  source={task.deliverables}
                  render={{Link: props => {
                    if (props.href.startsWith('/')) {
                      return <a href={props.href}>{props.children}</a>;
                    }
                    // If link to external site, open in new tab
                    return <a href={props.href} target="_blank">{props.children}</a>;
                  }}} />
              </span>
            </div>
            <div className="subtasks-ctn">
              {subtaskGids.length > 0 && <h4>Subtasks</h4>}
            <ul className="subtasks-list">
            {subtaskGids.map((gid, ind)=> {
              return <li key={ind} className="subtask-item"><FaCircleO size={10} className="fa-circle-o" />{tasks.taskMap[gid].title}</li>
            })}
          </ul>
          </div>
          </div>
        </div>
      </div>
    );
  };
}

export default connect(({pursuances, tasks}) => ({pursuances, tasks}), { getTasks })(DiscussView);
