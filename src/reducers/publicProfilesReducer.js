const initialState = [{id: 12345, name: 'Gerald Newman', skills: ['Programming:Go', 'Programming:React'], interests: ['PrisonReform', 'WrongfulConvictions']},
  {id: 123483454, name: 'Diego Sanchez', skills: ['Marketing', 'Fundraising'], interests: ['Healthcare', 'Education']},
  {id: 12648459345, name: 'Dianne Ennis', skills: ['Law', 'Research', 'CommunityOrganizing'], interests: ['PrisonReform']},
  {id: 12047504, name: 'Sarah Thomas', skills: ['Design', 'PublicSpeaking', 'Marketing'], interests: ['VoterRights']}
  ];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
