const initialState = {
  authenticated: true,
  username: 'elimisteve',
  contributionPoints: 160
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTRIBUTION_POINTS':
      return {
        ...state,
        contributionPoints: state.contributionPoints + action.amount
      };

    case 'POST_TASK_FULFILLED':
      return {
        ...state,
        contributionPoints: state.contributionPoints + 3
      };

    default:
      return state;
  }
}
