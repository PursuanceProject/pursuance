import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import {
  updateFormField,
} from '../../../../../actions';
import '../ReactDatePicker.css';
import './DatePicker.css';

class DueDatePicker extends Component {

  componentDidMount() {
    this.props.onRef && this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef && this.props.onRef(undefined);
  }

  handleDateSelect = (date) => {
    const { id, updateFormField, onSubmit } = this.props;

    if (date) {
      // Currently ignored until date Picker input is updating Redux value
      updateFormField(id, 'due_date_raw', date);
    }

    onSubmit && onSubmit(date);
  }

  onBlur = () => {
    this.props.onBlur && this.props.onBlur();
  }

  onKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.onBlur();
      return;
    }
  }

  render() {
    const { selected, autoFocus } = this.props;

    return (
      <div className="date-picker-ctn hide-xsmall-hier">
        <DatePicker
          placeholderText="YYYY-MM-DD"
          dateFormat="YYYY-MM-DD"
          ref={(input) => this.datePickerRef = input}
          onSelect={this.handleDateSelect}
          onChange={this.handleDateSelect}
          onKeyDown={this.onKeyDown}
          onBlur={this.onBlur}
          selected={selected}
          autoFocus={autoFocus}
         />
      </div>
    );
  }
}

export default connect(null, { updateFormField })(DueDatePicker);
