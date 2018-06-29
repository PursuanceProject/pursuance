import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { setCurrentPursuance } from '../../../actions';

class JumpToPursuance extends Component {
  handleJumpToPursuance = (e) => {
    const history = this.props.history;
    history.push({
      pathname: `/pursuance/${e}`
    });
    // Needed to trigger re-render of dropdown // @todo though this doesn't seem to work
    setCurrentPursuance(e);
  }

  showCurrentPursuance = (pursuances) => {
    const { currentPursuanceId } = this.props;
    const rawPursuance = pursuances[currentPursuanceId];
    if (rawPursuance !== undefined) {
      return rawPursuance.name;
    } else {
      return "Jump to a pursuance";
    }
  }

  produceOptions = (pursuances) => {
    const pursuanceArr = Object.values(pursuances);
    pursuanceArr.sort((p1, p2) => {
      return p1.name.toLowerCase().localeCompare(p2.name.toLowerCase());
    });

    return pursuanceArr.map((pursuance) => (
      <MenuItem
        key={pursuance.id}
        eventKey={pursuance.id}
        value={pursuance.id}
        href={ `/pursuance/${pursuance.id}` }
        >
        {pursuance.name}
      </MenuItem>
    ));
  }

  render() {
    const { pursuances } = this.props;
    return (
      <div className="nav-pursuances ">
        <DropdownButton
          id="header-pursuance-dropdown"
          title={ this.showCurrentPursuance(pursuances) }
          onSelect={ (e) => this.handleJumpToPursuance(e) }
          >
          { this.produceOptions(pursuances) }
        </DropdownButton>
      </div>
    )
  }
}

export default connect(({ pursuances, currentPursuanceId }) => ({ pursuances, currentPursuanceId }))(JumpToPursuance);
