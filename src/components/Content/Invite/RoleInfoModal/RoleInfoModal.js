import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { toggleRoleInfoModal } from '../../../../actions';
import './RoleInfoModal.css';

const RoleInfoModal = ({ showPopup, toggleRoleInfoModal }) => {
  return (
    <Modal show={showPopup.modal === 'RoleInfo'} onHide={toggleRoleInfoModal} dialogClassName="invite-modal">
      <Modal.Header closeButton>
        Role Info
      </Modal.Header>

      <Modal.Body>
        <img src="/assets/img/role_info.png" alt="Role descriptions" className="role-info" />
      </Modal.Body>
    </Modal>
  )
}

export default connect(
  ({ showPopup }) => ({ showPopup }), {
     toggleRoleInfoModal
})(RoleInfoModal);
