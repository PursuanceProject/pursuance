import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
import './CreatePursuanceForm.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  toggleSettingsInfoModal,
  updatePursuanceFormField,
  postPursuance,
  postTask,
  clearPursuanceFormFields
} from '../../../actions';

class CreatePursuanceForm extends Component {

  componentWillReceiveProps(nextProps){
    const { history, postTask, clearPursuanceFormFields, createPursuance } = this.props;
    const { redirect, mission } = createPursuance;
    let newRedirectState = nextProps.createPursuance.redirect;
    const currentPursuanceId = nextProps.currentPursuanceId;
    if(newRedirectState !== redirect && newRedirectState && currentPursuanceId){
      const firstTask = {
        title : mission,
        pursuance_id: currentPursuanceId
      };

      postTask(firstTask);
      history.push(`/pursuance/${currentPursuanceId}`);
      clearPursuanceFormFields();
    }
  }

  onChange = (e) => {
    const { updatePursuanceFormField } = this.props;
    const { name, value } = e.target;
    updatePursuanceFormField(name, value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { createPursuance, postPursuance } = this.props;
    const { mission, name } = createPursuance;
    if (name.length === 0) {
      return toast.error('Please enter pursuance Name!');
    }
    if (mission.length === 0) {
      return toast.error('Please enter pursuance Mission!');
    }
    toast.info('Creating new pursuance...');
    postPursuance(createPursuance);
  }

  render(){
    const { toggleSettingsInfoModal, createPursuance } = this.props;
    const { name, mission, isPending } = createPursuance;
    return (
      <form className="create-pursuance-form" autoComplete="off">

        {
          isPending ?
          <ToastContainer
            position="top-center"
            type="warning"
            autoClose={false}
            hideProgressBar={true}
            newestOnTop={false}
          /> :
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={false}
          />
        }
        <input
          autoFocus
          type="text"
          placeholder="Pursuance Name"
          className="create-pursuance-input"
          name={'name'}
          value={name}
          onChange={this.onChange}
        />
        <textarea
          type="text"
          placeholder="Pursuance Mission"
          className="create-pursuance-input"
          name={'mission'}
          value={mission}
          onChange={this.onChange}
          maxLength={200}
        />
        <div className="create-pursuance-setting">
          <input
            type="radio"
            name="is_encrypted"
            value="false"
            className="radio-field"
            defaultChecked
          />
          <span className="radio-field-span">
            Public Pursuance
          </span>
          <input type="radio"
            name="is_encrypted"
            value="true"
            className="radio-field"
            disabled
          />
          <span className="radio-field-span">
            Private Pursuance
          </span>
          <FaQuestionCircle
            size={24}
            className="create-pursuance-info-icon"
            onClick={toggleSettingsInfoModal}
            />
        </div>
        <button className="create-pursuance-button" onClick={this.handleSubmit}>Create Pursuance</button>
      </form>
    )
  }
}

export default withRouter(connect(({ createPursuance, currentPursuanceId }) =>
  ({ createPursuance, currentPursuanceId }), {
   toggleSettingsInfoModal,
   updatePursuanceFormField,
   postPursuance,
   postTask,
   clearPursuanceFormFields
})(CreatePursuanceForm));
