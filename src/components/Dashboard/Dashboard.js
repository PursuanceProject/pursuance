import React, { Component } from 'react';
import { getMemberships, getPursuances } from '../../actions';
import { connect } from 'react-redux';
import { unsetCurrentPursuance } from '../../actions';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PursuanceList from '../Content/PursuanceList/PursuanceList';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import './Dashboard.css';

class Dashboard extends Component {

  componentWillMount() {
    const { getMemberships, user, unsetCurrentPursuance, getPursuances } = this.props;
    unsetCurrentPursuance();
    if(user.authenticated) {
      getPursuances().then(() => {
        return getMemberships({ "user_username" : user.username });
    })
  }
}

  getTooltip = () => (
    <Tooltip id="tooltip-add">
      <strong>New Pursuance</strong>
    </Tooltip>
  );

  render () {
    const { user } = this.props;
    return (
      <div id="dashboard" className="content-ctn">
        <div id="dashboard-title">
          <h1>Dashboard</h1>
        </div>
        <div id="dash-first-row">
          <div className="dash-ctn">
            <div className="dash-box">
              <div className="dash-box-header">
                <h2 className="dash-box-title">
                  {
                    user.authenticated &&
                    <div>
                      My Pursuances
                      <Link to="/pursuance/create">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={this.getTooltip()}>
                          <FaPlusCircle className={"add-icon"} size={26}/>
                        </OverlayTrigger>
                      </Link>
                    </div>
                  }
                </h2>
              </div>
              { user.authenticated && <PursuanceList />}
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

export default connect(({ user }) => ({ user }),
 { getMemberships, unsetCurrentPursuance, getPursuances })(Dashboard);
