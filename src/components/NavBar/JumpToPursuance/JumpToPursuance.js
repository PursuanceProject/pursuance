import React from 'react';
import { MenuItem } from 'react-bootstrap';

const produceOptions = (pursuances) => {
  const pursuanceArr = Object.values(pursuances);
  pursuanceArr.sort((p1, p2) => {
    return p1.name.toLowerCase().localeCompare(p2.name.toLowerCase());
  });
  return pursuanceArr.map((pursuance) => (
    <MenuItem
      eventKey={pursuance.id}
      key={pursuance.id}
      value={pursuance.id}
    >
      {pursuance.name}
    </MenuItem>
  ));
}

export default produceOptions;
