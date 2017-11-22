import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postgrest from '../../../api/postgrest';
import { RenderMarkdown } from '../../../utils/markdown';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import './DiscussView.css';
import { getTasks } from '../../../actions';

const leapChatUrl = "http://localhost:8080/#GiddinessPuttRegisterKioskLucidityJockstrapTastebudFactoryPegboardOpticalEstrogenGoatskinHatchlingDittoPseudoNegotiatorLunchboxLightbulbUploadSyllableTulipQuiltJurorRuptureAorta";

class DiscussView extends Component {

  componentWillMount(){
    const { match: { params: { pursuanceId } }, tasks, getTasks } = this.props;
    if (!tasks.taskMap['1_1']) {
      getTasks(pursuanceId);
    }
  }

  render() {
    const { match: { params: { pursuanceId } }, pursuances, tasks } = this.props;
    // TODO: Un-hardcode after demo
    const taskGid = '1_1';
    const task = tasks.taskMap[taskGid];
    if(!task){
      return <div>Ain't nobody got task fo' that.</div>
    }
    const assignedPursuanceId = task.assigned_to_pursuance_id;
    return (
      <div className="discuss-ctn">
        <iframe className="leapchat-frame" title="Leapchat" src={leapChatUrl} />
        <div className="task-description-ctn">
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
            <span><RenderMarkdown content={task.deliverables} /></span>
          </div>
        </div>
      </div>
    );
  };
}

export default connect(({pursuances, tasks}) => ({pursuances, tasks}), { getTasks })(DiscussView);
