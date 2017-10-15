import React, { Component } from 'react';
import './LogIn.css';

class LogIn extends Component {

  componentDidMount() {
    let username = localStorage.getItem('username');
    if(username) {
      document.getElementById('input-username-login').value = username;
      document.getElementById('remember-username').checked = 'checked';
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let username = document.getElementById('input-username-login').value;
    let password = document.getElementById('input-password-login').value;
    if(document.getElementById('remember-username').checked) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
    console.log('Username: ', username);
    console.log('Password: ', password);
    // Front End Validation
    // Post Request LogIn
  }

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
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="input-username-login" className="col-sm-2 control-label">Username</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="input-username-login" placeholder="Username"/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="input-password-login" className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="input-password-login" placeholder="minimum of 8 characters"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                      <input id="remember-username" type="checkbox"/>
                      <span>Remember Username</span>
                    </div>
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

export default LogIn;
