// dumb component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postgrest from '../../api/postgrest';


class PublicPursuanceList extends Component {

  orderByDateDesc = (p1, p2) => {
    p1["parsedDate"] = Date.parse(p1.created);
    p2["parsedDate"] = Date.parse(p2.created);
    return p2.parsedDate - p1.parsedDate;
  }
  orderByDateAsc = (p1, p2) => {
    return p1.parsedDate - p2.parsedDate;
  }
  orderByNameAsc = (p1, p2) => {
    return p1.name.localeCompare(p2.name);
  }
  orderByNameDesc = (p1, p2) => {
    return p2.name.localeCompare(p1.name);
  }
  orderBy = () => {
    switch(this.props.publicOrder) {
      case "Most Recent":
        return this.orderByDateDesc;
      case "Oldest":
        return this.orderByDateAsc;
      case "A to Z":
        return this.orderByNameAsc;
      case "Z to A":
        return this.orderByNameDesc;
      case "Most Popular":
        // function
        break;
      default:
        return this.orderByDateDesc;
    }
  }
  
  getPublicPursuanceList = () => {
    const pursuanceArr = Object.values(this.props.publicPursuances);
    pursuanceArr.sort(this.orderBy());
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

export default connect( ({ publicPursuances, publicOrder }) => ({ publicPursuances, publicOrder }))(PublicPursuanceList);
