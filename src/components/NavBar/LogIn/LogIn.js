import React, { Component } from 'react';
import './LogIn.css';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.rememberChecked = '';
    this.usernameRemembered = '';
    this.username = '';
    this.password = '';
  }

  componentWillMount() {
    const usernameLS = localStorage.getItem('username');
    if(usernameLS) {
      this.usernameRemembered = usernameLS;
      this.rememberChecked = 'Checked';
    }
  }

  setUsername = (e) => {
    this.username = e.target.value;
  }

  setPassword = (e) => {
    this.password = e.target.value;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(document.getElementById('remember-username').checked) {
      localStorage.setItem('username', this.username);
    } else {
      localStorage.removeItem('username');
    }
    // Front End Validation
    // Post Request LogIn
    // Clear user info from RAM
    this.usernameRemembered = '';
    this.username = '';
    this.password = '';
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
                    <input type="text" className="form-control" id="input-username-login" placeholder="Username"
                    defaultValue={this.usernameRemembered}
                    onChange={this.setUsername}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="input-password-login" className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="input-password-login" placeholder="minimum of 8 characters" onChange={this.setPassword}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                      <input id="remember-username" type="checkbox" defaultChecked={this.rememberChecked} />
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
