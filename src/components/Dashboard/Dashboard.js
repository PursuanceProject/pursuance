import React, { Component } from 'react';
import PursuanceList from '../Content/PursuanceList/PursuanceList';
import * as postgrest from '../../utils/postgrest';
import './Dashboard.css';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pursuances: []
    };
  }

  componentWillMount() {
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
        <div id="dashboard-title">
          <h1>Dashboard</h1>
        </div>

        <div id="dash-first-row">
          <div className="dash-ctn">
            <h2>My Pursuances</h2>

            <PursuanceList pursuances={this.state.pursuances} />
          </div>
          <div className="dash-ctn">
            <h2>Next Steps</h2>
          </div>
        </div>

        <div id="dash-second-row">
          <div className="dash-ctn">
            <h2>Pinned Tasks</h2>
          </div>
          <div className="dash-ctn">
            <h2>Notifications</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
