import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showTaskDetails } from '../../../../actions';
import './DiscussView.css';

const leapChatUrl = "http://localhost:8080/#GiddinessPuttRegisterKioskLucidityJockstrapTastebudFactoryPegboardOpticalEstrogenGoatskinHatchlingDittoPseudoNegotiatorLunchboxLightbulbUploadSyllableTulipQuiltJurorRuptureAorta";

class DiscussView extends Component {

  componentWillMount() {
    const {
      match: { params: { taskGid } },
      showTaskDetails
    } = this.props;

    showTaskDetails({taskGid});
  }

  getIframeStyle = () => {
    const { rightPanel } = this.props;
    if (rightPanel.show) {
      return "leapchat-frame leapchat-frame-narrow";
    } else {
      return "leapchat-frame";
    }
  }

  render() {
    const { match: { params: { taskGid } } } = this.props;
    return (
      <div className="discuss-ctn">
        <iframe className={this.getIframeStyle()} title="Leapchat" src={leapChatUrl + taskGid} />
      </div>
    );
  };
}

export default connect(({tasks, rightPanel}) => ({tasks, rightPanel}), { showTaskDetails })(DiscussView);
