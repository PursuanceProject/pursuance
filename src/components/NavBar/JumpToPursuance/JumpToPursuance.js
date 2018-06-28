import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class JumpToPursuance extends Component {
  produceOptions = (pursuances) => {
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

  render() {
      return (
        // <NavDropdown id="jump-to-pursuance" title={this.showCurrentPursuance(pursuances)} onSelect={this.handleJumpToPursuance}>
        // {jumpToPursuanceOptions(pursuances)}
        // </NavDropdown>
        <ul className="nav-pursuances">
          <div class="dropdown open btn-group">
            <DropdownButton
              id="task-status-dropdown"
              title={this.props.title}
              noCaret>
              {this.produceOptions(this.props.pursuances)}
            </DropdownButton>
            <div className="edit-icon-ctn">
              tip
            </div>
          </div>
        </ul>
      )
  }
}

export default JumpToPursuance;


// <div className={"task-status-ctn task-status-" + status + " hide-small"}>
//         <DropdownButton
//           id="task-status-dropdown"
//           title={this.getCurrentStatus()}
//           noCaret>
//           {this.getDropDownItems()}
//         </DropdownButton>
//         {STATUS_IMAGES[status] && <img src={`/assets/img/${status}.gif`} alt={`Status: ${status}`} />}
//         <div className="edit-icon-ctn">
//           <TiPencil id="task-edit-icon" size={18} />
//         </div>
//       </div>


// <ul role="menu" class="dropdown-menu" aria-labelledby="task-status-dropdown">
//   <li role="presentation" class=""><a role="menuitem" tabindex="-1" href="#">Started</a></li>
//   <li role="presentation" class=""><a role="menuitem" tabindex="-1" href="#">Working On</a></li>
//   <li role="presentation" class=""><a role="menuitem" tabindex="-1" href="#">Help Wanted</a></li>
//   <li role="presentation" class=""><a role="menuitem" tabindex="-1" href="#">Ready For Review</a></li>
//   <li role="presentation" class=""><a role="menuitem" tabindex="-1" href="#">Reviewing</a></li>
//   <li role="presentation" class=""><a role="menuitem" tabindex="-1" href="#">Done</a></li>
// </ul>

// <TiPencil id="task-edit-icon" size={18} />