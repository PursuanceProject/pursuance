import React from 'react';
import './Assigner.css';
import { connect } from 'react-redux';

const Assigner = (props) => {
  console.log(props.name);
  return (
    <div>
      @<input type="text"
        className="assigner-field"
         placeholder="assignee"
       />
    </div>
  )
}

export default connect()(Assigner);
