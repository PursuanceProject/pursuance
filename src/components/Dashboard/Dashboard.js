import React, { Component } from 'react';
import PursuanceList from '../Content/PursuanceList/PursuanceList';
import './Dashboard.css';
import { getPursuances } from '../../actions';
import { connect } from 'react-redux';


class Dashboard extends Component {

  componentWillMount() {
    // TODO: Once we add auth, only grab pursuances that the logged-in
    // user is a mumber of
    this.props.getPursuances();
  }

  render () {
    return (
      <div id="dashboard">
        <div id="dashboard-title">
          <h1>Dashboard</h1>
        </div>
        <div id="dash-first-row">
          <div className="dash-ctn">
            <div className="dash-box">
              <h2 className="dash-box-title">My Pursuances</h2>
              <PursuanceList />
            </div>
          </div>
          {/* <div className="dash-ctn">
            <div className="dasb-box">
              <h2>Next Steps</h2>
            </div>
          </div> */}
        </div>
        {/* <div id="dash-second-row">
          <div className="dash-ctn">
            <div className="dasb-box">
              <h2>Pinned Tasks</h2>
            </div>
          </div>
          <div className="dash-ctn">
            <div className="dasb-box">
              <h2>Notifications</h2>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default connect(null, { getPursuances })(Dashboard);
