import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postgrest from '../../api/postgrest';


class PublicPursuanceList extends Component {

  orderByDateDesc = (p1, p2) => {
    p1["created_parsed"] = Date.parse(p1.created);
    p2["created_parsed"] = Date.parse(p2.created);
    return p2.created_parsed - p1.created_parsed;
  }
  orderByDateAsc = (p1, p2) => {
    return p1.created_parsed - p2.created_parsed;
  }
  orderByNameAsc = (p1, p2) => {
    return p1.name.toLowerCase().localeCompare(p2.name.toLowerCase());
  }
  orderByNameDesc = (p1, p2) => {
    return p2.name.toLowerCase().localeCompare(p1.name.toLowerCase());
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
