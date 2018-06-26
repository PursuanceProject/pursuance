import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssignerButton from './AssignerButton/AssignerButton';
import AssignerSuggestions from '../../../TaskManager/TaskForm/Suggestions/AssignerSuggestions';
import AssignerInput from '../../../TaskManager/TaskForm/AssignerInput/AssignerInput';
import './TaskAssigner.css';

class TaskAssigner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAssigneeInput: false
    }
  }

  showAssigneeInput = () => {
    this.setState({
      showAssigneeInput: true
    });
  }

  hideEditAssignee = () => {
    this.setState({
      showAssigneeInput: false
    });
  }

  showSuggestions = () => {
    const { autoComplete, taskGid } = this.props;
    return autoComplete.suggestions && taskGid === autoComplete.suggestionForm;
  }

  render() {
    const { showAssigneeInput } = this.state;
    const { taskGid, placeholder, assignedTo } = this.props;
    return (
      <div className="task-assigned-to hide-small">
          {
            (showAssigneeInput &&
             <div className="assign-autocomplete-ctn">
               {
                this.showSuggestions()
                 &&
                 <AssignerSuggestions
                   suggestionForm={taskGid}
                   editMode={true}
                   hideEditAssignee={this.hideEditAssignee}
                 />
               }
              <AssignerInput
                formId={taskGid}
                editMode={true}
                hideEditAssignee={this.hideEditAssignee}
                placeholder={placeholder}
                assignedTo={assignedTo}
              />
            </div>)
            ||
              <AssignerButton
                showAssigneeInput={this.showAssigneeInput}
                placeholder={placeholder}
              />
          }
      </div>
    )
  }
}

export default connect(({ autoComplete }) => ({ autoComplete }) )(TaskAssigner);
