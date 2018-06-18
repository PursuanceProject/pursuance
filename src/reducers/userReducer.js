const lsUsername = localStorage.getItem('username') || '';

const initialState = {
  authenticated: lsUsername !== '',
  username: lsUsername,
  contributionPoints: 160
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        authenticated: true,
        username: action.username
      };

    case 'USER_LOGOUT_SUCCESS':
      return {
        ...state,
        authenticated: false,
        username: ''
      };

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
