import React, { Component } from 'react';

import './TaskTitle.css';

class TaskTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: false
    };
  }

  componentWillReceiveProps = (newProps) => {
    // handle case when selected task will change.
    if (newProps.title !== this.props.title) {
      this.setState({showInput: false});
    }
  }

  validTitle = (value) => {
    return value !== '';
  }

  toggleInput = () => {
    const { showInput } = this.state;
    this.setState({showInput: !showInput});
  }

  onEnter = (value) => {
    const { id, patchTask } = this.props;
    patchTask({
      gid: id,
      title: value
    })
  }

  onChange = (e) => {
    const { key, target: { value } } = e;
    if (key === 'Enter') {
      this.onEnter(value);
      this.toggleInput();
    } else if (key === 'Escape') {
      this.toggleInput();
    }
  }

  render() {
    const { title } = this.props;
    const { showInput } = this.state;

    return (
      <div className="discuss-task-title-ctn">
        {showInput && (
          <input
            autoFocus
            type="text"
            className="discuss-task-title-update"
            name={'title'}
            defaultValue={title}
            onKeyDown={this.onChange}
            onBlur={this.toggleInput}
          />
        )}
        {!showInput && (
          <span className="discuss-task-title" onClick={this.toggleInput}>{title}</span>
        )}
      </div>
    )
  }
}

export default TaskTitle;
