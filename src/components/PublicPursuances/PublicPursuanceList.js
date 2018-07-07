import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postgrest from '../../api/postgrest';


class PublicPursuanceList extends Component {

  sortByDateDesc = (p1, p2) => {
    p1["created_parsed"] = Date.parse(p1.created);
    p2["created_parsed"] = Date.parse(p2.created);
    return p2.created_parsed - p1.created_parsed;
  }
  sortByDateAsc = (p1, p2) => {
    return p1.created_parsed - p2.created_parsed;
  }
  sortByNameAsc = (p1, p2) => {
    return p1.name.toLowerCase().localeCompare(p2.name.toLowerCase());
  }
  sortByNameDesc = (p1, p2) => {
    return p2.name.toLowerCase().localeCompare(p1.name.toLowerCase());
  }
  sortBy = () => {
    switch(this.props.publicOrder) {
      case "Most Recent":
        return this.sortByDateDesc;
      case "Oldest":
        return this.sortByDateAsc;
      case "A to Z":
        return this.sortByNameAsc;
      case "Z to A":
        return this.sortByNameDesc;
      case "Most Popular":
        // function
        break;
      default:
        return this.sortByDateDesc;
    }
  }
  
  getPublicPursuanceList = () => {
    const pursuanceArr = Object.values(this.props.publicPursuances);
    pursuanceArr.sort(this.sortBy());
    return pursuanceArr.map((pursuance) => (
      <div key={pursuance.id} className="pursuance-list-ctn">
        <Link to={`/pursuance/${pursuance.id}`}>
          <h3><strong>{pursuance.name}</strong></h3>
        </Link>
        <p><strong>Mission:</strong> {pursuance.mission}</p>
        <p>Created {postgrest.formatDate(pursuance.created)}</p>
      </div>
    ));
  }
  render() {
    return (
      <div className="pursuance-list">
        {this.getPublicPursuanceList()}
      </div>
    )
  }
  
}

export default connect(({ publicPursuances, publicOrder }) => ({ publicPursuances, publicOrder }))(PublicPursuanceList);
