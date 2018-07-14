const initialState = [{id: 12345, name: 'geraldnewman18', skills: ['Programming:Go', 'Programming:React'], interests: ['PrisonReform', 'WrongfulConvictions']},
  {id: 123483454, name: 'diegoSanchez', skills: ['Marketing', 'Fundraising'], interests: ['Healthcare', 'Education']},
  {id: 12648459345, name: 'dianneEnnis', skills: ['Law', 'Research', 'CommunityOrganizing'], interests: ['PrisonReform']},
  {id: 12047504, name: 'sarahThomas', skills: ['Design', 'PublicSpeaking', 'Marketing'], interests: ['VoterRights']},
  {id: 802984, name: 'boskoBertolini', skills: ['Research', 'Business'], interests: ['MarriageEquality', 'SkillsTraining']},
  {id: 94365, name: 'pelegColombo', skills: ['Research', 'DataScience', 'Management'], interests: ['StateSurveillance', 'DrugLegalization']},
  {id: 205602, name: 'natanaelVenczel', skills: ['Chemistry', 'Physics', 'Programming:Python', 'IT:DevOps'], interests: ['Education', 'AccessibleHealthcare', 'HigherEducation']},
  {id: 890234, name: 'huriLondon', skills: ['IT:Security', 'Programming:C'], interests: ['PrisonReform', 'MandatoryMinimums']}
];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
