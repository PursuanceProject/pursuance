import React, { Component } from 'react';
import { getPursuances } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PursuanceList from '../Content/PursuanceList/PursuanceList';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import './Dashboard.css';

class Dashboard extends Component {

  componentWillMount() {
    // TODO: Once we add auth, only grab pursuances that the logged-in
    // user is a mumber of
    this.props.getPursuances();
  }

  getTooltip = () => (
    <Tooltip id="tooltip-add">
      <strong>New Pursuance</strong>
    </Tooltip>
  );

  render () {
    return (
      <div id="dashboard" className="content-ctn">
        <div id="dashboard-title">
          <h1>Dashboard</h1>
        </div>
        <div id="dash-first-row">
          <div className="dash-ctn">
            <div className="dash-box">
              <div className="dash-box-header">
                <h2 className="dash-box-title">My Pursuances</h2>
                <Link to="/pursuance/create">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={this.getTooltip()}>
                    <FaPlusCircle className={"add-icon"} size={26}/>
                  </OverlayTrigger>
                </Link>
            </div>
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
