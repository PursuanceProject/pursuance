import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

  render () {
    return (
      <div id="home-background">

        <div className="title-container">

          <div id="title">
            <h1>Pursuance</h1>
          </div>

          <div className="motto-container">
            <div>
              <h3>Pursuance</h3>
            </div>
            <div>
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </div>
            <div>
              <h3>Collaborate</h3>
            </div>
            <div>
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </div>
            <div>
              <h3>Justice</h3>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default HomePage;
