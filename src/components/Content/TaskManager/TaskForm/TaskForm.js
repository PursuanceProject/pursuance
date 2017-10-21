import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './ReactDatePicker.css';
import './TaskForm.css';
import generateId from '../../../../utils/generateId';
import { UpdateFormField } from '../../../../actions'
import { connect } from 'react-redux';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = { startDate: '' };

    this.time = moment().format("YYYY-MM-DD");
    console.log('Time: ', this.time);
  }
  componentWillMount() {
    this.id = generateId('task')
  }

  onChange = (e) => {
    this.props.UpdateFormField(e.target.value, this.id,e.target.name);
  }

  handleDateSelect = (date) => {
    this.setState({ startDate: date });
  }

  handleDateChange = (date) => {
    this.setState({ startDate: date });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render () {
    return (
      <div className="task-form-container">

        <form className="task-form" name={this.id}>
          <div id="input-task-title-ctn" className="">
            <input id="input-task-title" type="text" className="form-control"  placeholder="Task Title" name={'title'} onChange={this.onChange}/>
          </div>
          <div className="assign-autocomplete">
            <input type="text" className="form-control" placeholder="Assigned To" name={'assigned_to'} onChange={this.onChange}/>
          </div>
          <div className="date-picker-ctn">
            <DatePicker
              placeholderText="YYYY-MM-DD"
              dateFormat="YYYY-MM-DD"
              selected={this.state.startDate}
              onSelect={this.handleDateSelect}
              onChange={this.handleDateChange}
            />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>
            Save
          </button>
        </form>

      </div>
    );
  }
}

export default connect(null, { UpdateFormField })(TaskForm);
