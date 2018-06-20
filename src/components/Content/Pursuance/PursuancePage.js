import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setCurrentPursuance } from '../../../actions';
import PursuanceMenu from './PursuanceMenu';
import TaskListView from './views/TaskListView';
import CalendarView from './views/CalendarView';
import DiscussView from './views/DiscussView';
import ParticipantsView from './views/ParticipantsView';
import RightPanel from '../RightPanel/RightPanel';
import './PursuancePage.css';
import ReactModal from 'react-modal';

class PursuancePage extends Component {
 constructor(){
  super();
  this.state={
    modalIsOpen : false
   }
 }
  componentWillMount() {
    let { setCurrentPursuance, match, currentPursuanceId } = this.props;
    currentPursuanceId = Number(match.params.pursuanceId) || currentPursuanceId;
    setCurrentPursuance(currentPursuanceId);
    ReactModal.setAppElement('body');
  }
  componentDidMount(){
   this.openModal();
  }
  openModal = () => {
   this.setState({modalIsOpen : true});
  }
  closeModal = () => {
   this.setState({modalIsOpen: false});
  }
  handleKeyDown = (event) => {
   if(event.key === "?"){
    this.setState({modalIsOpen : true});
   }
  }
  render() {
    return (
      <Router>
        <div id="pursuance-page" className="content-ctn" onKeyDown={this.handleKeyDown} tabIndex="-1">
        <ReactModal className="Modal" shouldCloseOnEsc={true} shouldFocusAfterRender={true} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} closeTimeoutMS={350} style={{overlay:{background:"none"}}}>
        <span className='close' onClick={this.closeModal}>&times;</span>
        <h3>Keyboard Shortcuts</h3>
        <hr style={{border:"1.5px solid grey"}}/>
        <div className="columns">
        <div className="column one-half">
        <table className="keyboard-mappings">
        <tbody>
        <tr>
        <td className="keys">
        <kbd>?</kbd>
        </td>
        <td>&nbsp; Open shortcut window</td>
        </tr>
        <tr>
        <td className="keys">
        <kbd>Everything Else</kbd>
        </td>
        <td> &nbsp; Do Nothing</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </ReactModal>
          <nav id="pursuance-nav">
            <PursuanceMenu/>
          </nav>
          <article>
            <Switch>
              <Route exact path="/pursuance/:pursuanceId" component={TaskListView}/>
              <Route exact path="/pursuance/:pursuanceId/tasks" component={TaskListView}/>
              <Route exact path="/pursuance/:pursuanceId/calendar" component={CalendarView}/>
              <Route exact path="/pursuance/:pursuanceId/discuss/task/:taskGid" component={DiscussView}/>
              <Route exact path="/pursuance/:pursuanceId/participants" component={ParticipantsView}/>
            </Switch>
            <RightPanel/>
          </article>
        </div>
      </Router>
    );
  }
}

export default connect(({currentPursuanceId}) =>
  ({ currentPursuanceId }), {
   setCurrentPursuance
})(PursuancePage);
