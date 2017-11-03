import React from 'react';
import { Badge, Label } from 'react-bootstrap';
import FaStar from 'react-icons/lib/fa/star';
import AnimatedNumber from 'react-animated-number';
import './ContributionPointsCounter.css';

const ContributionPointsCounter = ({ username, contributionPoints }) => (
  <AnimatedNumber
  style={{
      transition: '2s ease-out',
      transitionProperty: 'color'
  }}
  stepPrecision={0}
  value={contributionPoints}
  formatValue={n => (
    <Label bsStyle="warning"><FaStar size={12} /><span className="ContributionPointsAmount">{n}</span></Label>
  )}/>

);

export default ContributionPointsCounter;