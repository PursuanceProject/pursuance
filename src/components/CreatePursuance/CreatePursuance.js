import React, { Component } from 'react';
import CreatePursuanceForm from './CreatePursuanceForm/CreatePursuanceForm';
import SettingsInfoModal from './SettingsInfoModal/SettingsInfoModal';
import './CreatePursuance.css';

class CreatePursuance extends Component {
  render(){
    return (
      <div className="create-pursuance-container">
        <div className="create-pursuance-header">
          <h4>Create a</h4>
          <h1>Pursuance</h1>
        </div>
        <SettingsInfoModal />
        <CreatePursuanceForm />
      </div>
    )
  }
}

export default CreatePursuance;
