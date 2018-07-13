import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postgrest from '../../api/postgrest';
import './PublicPursuances.css';

class PublicPursuanceList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchByTag: '',
      searchByDescription: '' // TODO(elimisteve): actually use
    }
  }

  onChangeTag = (e) => {
    this.setState({
      searchByTag: e.target.value
    })
  }

  getPublicPursuanceList = () => {
    const pursuanceArr = Object.values(this.props.publicPursuances);
    return pursuanceArr.map((pursuance) => {
      if (pursuance.name.toLowerCase().indexOf(this.state.searchByTag) === -1 &&
          pursuance.mission.toLowerCase().indexOf(this.state.searchByTag) === -1) {
        return null;
      }
      return (
        <div key={pursuance.id} className="pursuance-list-ctn">
          <Link to={`/pursuance/${pursuance.id}`}>
            <h3><strong>{pursuance.name}</strong></h3>
          </Link>
          <p><strong>Mission:</strong> {pursuance.mission}</p>
          <p>Created {postgrest.formatDate(pursuance.created)}</p>
        </div>
      )
    });
  }
  
  render() {
    return (
      <div className="pursuance-list">
        <h2 className="dash-box-title">Search All Public Pursuances</h2>
        <div className="public-pursuance-search-form">
          <label>Search by tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            placeholder="PrisonReform"
            autoFocus
            onChange={this.onChangeTag}
          />
          <br />
          <label>Search pursuance descriptions:</label>
          <input
            type="text"
            placeholder="prison-industrial complex"
          />
        </div>
        <hr />
        <h3>Search Results</h3>
        {this.getPublicPursuanceList()}
      </div>
    )
  }
  
}

export default connect(({ publicPursuances }) => ({ publicPursuances }))(PublicPursuanceList);
