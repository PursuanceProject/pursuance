import React, { Component } from 'react';

class LogIn extends Component {

  render() {
    return (
      <div className="modal fade" id="log-in-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Log In</h4>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
