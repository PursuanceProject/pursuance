import React from 'react';

const leapChatUrl = "http://localhost:8080/#GiddinessPuttRegisterKioskLucidityJockstrapTastebudFactoryPegboardOpticalEstrogenGoatskinHatchlingDittoPseudoNegotiatorLunchboxLightbulbUploadSyllableTulipQuiltJurorRuptureAorta";

const DiscussView = ({ match: { params: { pursuanceId } } }) => {
  return (
    <iframe width="100%" title="Leapchat" src={leapChatUrl} />
  );
};

export default DiscussView;
