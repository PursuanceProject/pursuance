import React from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { setCurrentPursuance } from '../../../actions';

const getCurrentPursuanceName = (pursuances, currentPursuanceId) => {
  const rawPursuance = pursuances[currentPursuanceId];
  if (rawPursuance !== undefined) {
    return rawPursuance.name;
  } else {
    return "Jump to a pursuance";
  }
}

const produceOptions = (pursuances) => {
  const pursuanceArr = Object.values(pursuances);
  pursuanceArr.sort((p1, p2) => {
    return p1.name.toLowerCase().localeCompare(p2.name.toLowerCase());
  });

  return pursuanceArr.map((pursuance) => (
    <MenuItem
      key={pursuance.id}
      eventKey={pursuance.id}
      value={pursuance.id}
      >
      {pursuance.name}
    </MenuItem>
  ));
}

const onMenuItemSelectAction = (pursuanceId, onMenuItemSelect, history) => {
  history.push({
    pathname: `/pursuance/${pursuanceId}`
  });  
  onMenuItemSelect(pursuanceId);
}

const renderDropdown = (props) => {
  return (
    <div className="nav-pursuances noselect">
      <DropdownButton
        id="header-pursuance-dropdown"
        title={ getCurrentPursuanceName(props.pursuances, props.currentPursuanceId) }
        onSelect={ (pursuanceId) => onMenuItemSelectAction(pursuanceId, props.onMenuItemSelect, props.history) } 
        >
        { produceOptions(props.pursuances) }
      </DropdownButton>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentPursuanceId: state.currentPursuanceId,
    pursuances: state.pursuances
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMenuItemSelect: (pursuanceId) => {
      dispatch(setCurrentPursuance(pursuanceId));
    }
  }
}

const JumpToPursuance = connect(
  mapStateToProps,
  mapDispatchToProps
)(renderDropdown)

export default JumpToPursuance