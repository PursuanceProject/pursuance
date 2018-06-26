import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { toggleSettingsInfoModal } from '../../../actions';

const SettingsInfoModal = ({ showSettingsInfoModal, toggleSettingsInfoModal }) => {
  return (
    <Modal show={showSettingsInfoModal} onHide={toggleSettingsInfoModal}>

      <Modal.Header closeButton>
        Encryption Settings
      </Modal.Header>

      <Modal.Body>

        <div>
          <b> Public </b>pursuances encrypt all chat messages and files exchanged between
          users, but not task details (e.g., their description).  If you need the
          ability to search for tasks by their detailed description, or you want
          the option of enabling anyone to join this pursuance without an invite
          (as opposed to keeping it invite-only), make your pursuance Public.
          (In the future we will add the option of making a Public pursuance's chat
          messages unencrypted and therefore searchable.)
        </div>
        <br />
        <div>
          <b> Private </b> pursuances encrypt almost everything -- namely
          all tasks, messages, files, and links -- making Private pursuances more
          secure against snooping than Public ones.  If you want more privacy and
          don't need to be able to search for tasks by their description, make
          your pursuance Private.  (You will still be able to search tasks by
          title, despite their being encrypted
          (task titles are small enough to be downloaded, decrypted, then filtered
          through on your device).  As with Public pursuances, Private ones
          do not encrypt a task's assignee, due date, and status (e.g., "Done").)
        </div>

      </Modal.Body>
    </Modal>
  )
}

export default connect(
  ({ showSettingsInfoModal }) => ({ showSettingsInfoModal }), {
     toggleSettingsInfoModal
})(SettingsInfoModal);
