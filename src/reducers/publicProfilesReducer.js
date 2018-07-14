const initialState = [{id: 12345, name: 'Gerald Newman', skills: ['Programming:Go', 'Programming:React'], interests: ['PrisonReform', 'WrongfulConvictions']},
  {id: 123483454, name: 'Diego Sanchez', skills: ['Marketing', 'Fundraising'], interests: ['Healthcare', 'Education']},
  {id: 12648459345, name: 'Dianne Ennis', skills: ['Law', 'Research', 'CommunityOrganizing'], interests: ['PrisonReform']},
  {id: 12047504, name: 'Sarah Thomas', skills: ['Design', 'PublicSpeaking', 'Marketing'], interests: ['VoterRights']},
  {id: 802984, name: 'Boško Bertolini', skills: ['Research', 'Business'], interests: ['MarriageEquality', 'SkillsTraining']},
  {id: 94365, name: 'Peleg Colombo', skills: ['Research', 'DataScience', 'Management'], interests: ['StateSurveillance', 'DrugLegalization']},
  {id: 205602, name: 'Natanael Venczel', skills: ['Chemistry', 'Physics', 'Programming:Python', 'IT:DevOps'], interests: ['Education', 'AccessibleHealthcare', 'HigherEducation']},
  {id: 890234, name: 'Huri London', skills: ['IT:Security', 'Programming:C'], interests: ['PrisonReform', 'MandatoryMinimums']}
];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
