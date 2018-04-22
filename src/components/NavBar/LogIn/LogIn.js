import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginSuccess } from '../../../actions';
import '../SignUpLogInModal.css';
import './LogIn.css';

const USERNAME_KEY = 'username';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.rememberChecked = '';
    this.usernameRemembered = '';
    this.username = '';
    this.password = '';
  }

  componentWillMount() {
    const usernameLS = localStorage.getItem(USERNAME_KEY);
    if (usernameLS) {
      this.usernameRemembered = usernameLS;
      this.rememberChecked = 'Checked';
    }
  }

  setUsername = (e) => {
    this.username = e.target.value.toLowerCase();
  }

  setPassword = (e) => {
    this.password = e.target.value;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userLoginSuccess } = this.props;

    // If user is submitting their username as populated from
    // localStorage, this.username will be empty
    this.username = this.username || this.usernameRemembered;

    const remember = document.getElementById('remember-username').checked;
    if (remember) {
      localStorage.setItem(USERNAME_KEY, this.username);
    } else {
      localStorage.removeItem(USERNAME_KEY);
    }
    // TODO: Front End Validation
    // Post Request LogIn
    // Clear user info from RAM

    // TODO: Actually log user in, don't just fake it
    userLoginSuccess({username: this.username});

    this.usernameRemembered = '';
    this.username = '';
    this.password = '';
  }

  render() {
    return (
      <div  id="log-in-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog sign-login-dialog" role="document">
          <div className="modal-content signup-login-content">
            <div className="modal-header">
              <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title sign-login-title">Log In</h4>
            </div>
            <div className="modal-body signup-login-body">
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="col-sm-2 control-label signup-login-label" htmlFor="input-username-login">Username</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="input-username-login" placeholder="Username"
                    defaultValue={this.usernameRemembered}
                    onChange={this.setUsername}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label signup-login-label"  htmlFor="input-password-login">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="input-password-login" placeholder="" onChange={this.setPassword}/>
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
                  <button className="btn btn-default btn-close" type="button" data-dismiss="modal">
                    Close
                  </button>
                  <button className="btn btn-primary" type="submit">
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

export default connect(null, { userLoginSuccess })(LogIn);
