import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById('input-username-signup').value;
    const password = document.getElementById('input-password-signup').value;

    console.log('Username: ', username);
    console.log('Password: ', password);
    // Front End Validation
    // Post Request SignUp
  }

  render() {
    return (
      <div className="modal fade" id="sign-up-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Sign Up</h4>
            </div>
            <div className="modal-body">
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="input-username-signup" className="col-sm-2 control-label">Username</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="input-username-signup" placeholder="Username" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="input-password-signup" className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="input-password-signup" placeholder="minimum of 8 characters" />
                  </div>
                </div>
                <div className="form-group modal-btn-ctn">
                  <button type="button" className="btn btn-default" data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
