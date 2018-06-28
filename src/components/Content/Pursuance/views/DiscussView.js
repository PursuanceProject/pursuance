import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rpShowTaskDetails } from '../../../../actions';
import './DiscussView.css';

const leapChatUrl = "http://localhost:8080/#GiddinessPuttRegisterKioskLucidityJockstrapTastebudFactoryPegboardOpticalEstrogenGoatskinHatchlingDittoPseudoNegotiatorLunchboxLightbulbUploadSyllableTulipQuiltJurorRuptureAorta";

class DiscussView extends Component {

  componentWillMount() {
    const {
      match: { params: { taskGid } },
      rpShowTaskDetails
    } = this.props;

    rpShowTaskDetails({taskGid});
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
        <iframe key={taskGid} className={this.getIframeStyle()} title="LeapChat" src={leapChatUrl + taskGid} />
      </div>
    );
  };
}

export default connect(({tasks, rightPanel}) => ({tasks, rightPanel}), { rpShowTaskDetails })(DiscussView);
