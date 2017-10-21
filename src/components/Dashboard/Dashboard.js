import React, { Component } from 'react';
import './Dashboard.css';
import PursuanceList from '../PursuanceList/PursuanceList';

import * as postgrest from '../../utils/postgrest';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pursuances: []
    };
  }

  componentDidMount() {
    // TODO: Once we add auth, only grab pursuances that the logged-in
    // user is a mumber of
    postgrest.getJSON('/pursuances?select=id,name,description')
      .then((pursuances) => {
        this.setState({
          pursuances: pursuances
        })
      })
      .catch((err) => {
        console.log('Error fetching pursuances:', err);
      })
  }

  render () {
    return (
      <div id="dashboard">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <h2>My Pursuances</h2>

            <PursuanceList pursuances={this.state.pursuances} />
          </div>
          <div className="col-sm-6 col-lg-3">
            <h2>Next Steps</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <h2>Pinned Tasks</h2>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h2>Notifications</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
