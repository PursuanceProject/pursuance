export default function (state = {}, action) {

  switch (action.type) {

    case 'GET_USERS_PENDING':
      return state;

    case 'GET_USERS_FULFILLED':
      return action.payload

    case 'GET_USERS_REJECTED':
      return 'CHECK CONSOLE FOR ERROR';

    default:
      return state
  }

}
