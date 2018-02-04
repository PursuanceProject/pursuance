// smart component

import React, { Component } from 'react';
import PublicPursuanceList from './PublicPursuanceList';
import { setPublicOrder, getPublicPursuances } from '../../actions';
import { connect } from 'react-redux';
import './PublicPursuances.css';


class PublicPursuances extends Component {

  handleChange = (event) => {
    this.props.setPublicOrder(event.target.value);
  }
  
  componentWillMount() {
    this.props.getPublicPursuances();
  }

  render () {
    return (
      <div id="dashboard">
        <div id="dashboard-title">
          <h1>All Pursuances</h1>
        </div>
        <div id="dash-first-row">
          <div className="dash-ctn">
            <div className="dash-box">
              <div className="filter">
                <form className="custom-dropdown big">
                  <label>Order by:</label>
                  <select value={this.props.publicOrder} onChange={this.handleChange}>
                    <option value="Most Recent">Most Recent</option>
                    <option value="Oldest">Oldest</option>
                    <option value="A to Z">A to Z</option>
                    <option value="Z to A">Z to A</option>
                    {/*TODO: <option value="Most Popular">Most Popular</option>*/}
                  </select>
                </form>
              </div>
              <PublicPursuanceList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({publicOrder}) => ({publicOrder}), {
  setPublicOrder,
  getPublicPursuances
})(PublicPursuances);
